/* eslint-disable @typescript-eslint/ban-ts-comment */
import CircuitBreaker from "opossum";
export class CircuitBreakerError extends Error {
  metadata: CircuitBreaker;

  constructor(circuitBreaker: CircuitBreaker) {
    super();
    this.name = "CircuitBreakerError";
    this.message = `Circuit Breaker is open for ${circuitBreaker.group} - ${circuitBreaker.name}`;
    this.metadata = circuitBreaker;
  }
}

const defaultOptions: CircuitBreaker.Options = {
  timeout: 15000, // If our function takes longer than 15 seconds, trigger a failure
  rollingCountTimeout: 10000, // Sets the duration of the statistical rolling window, in milliseconds. This is how long Opossum keeps metrics for the circuit breaker to use and for publishing.
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 10000, // After 10 seconds, set breaker to half-open
  cache: false, // Don't cache API results
  allowWarmUp: true, // Allow failures without opening the circuit during a brief warmup period (this is the rollingCountTimeout property)
  volumeThreshold: 10, // There must be at least 10 requests within the rollingCountTimeout or the breaker wont open regardless of failures.
  // errorFilter: _errorFilter,
};

export const createCircuitBreaker = <
  ActionArgs extends unknown[],
  ActionReturn
>(
  action: (...args: ActionArgs) => Promise<ActionReturn>,
  overrideOptions: CircuitBreaker.Options = {}
) => {
  const options = { ...defaultOptions, ...overrideOptions };
  return new CircuitBreaker<ActionArgs, ActionReturn>(action, options);
};
