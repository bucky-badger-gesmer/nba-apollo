import { DataSource, DataSourceConfig } from "apollo-datasource";
import CircuitBreaker from "opossum";
import { SportQLContext, SportQLHeaders } from "../types";
import { createCircuitBreaker } from "../services/opossum";

const circuitBreakers = new Map<string | symbol, CircuitBreaker>();

export abstract class SportQLDataSource extends DataSource<SportQLContext> {
  headers: SportQLHeaders;
  context: SportQLContext;

  constructor() {
    super();
    return new Proxy(this, {
      get: (target, prop) => {
        const APIName = target.constructor.name;
        const functionName = String(prop);
        //@ts-ignore-error
        if (typeof target[prop] === "function" && prop !== "initialize") {
          //@ts-ignore-error
          return new Proxy(target[prop], {
            apply: async (target, thisArg, argumentsList) => {
              //@ts-ignore-error
              if (await bypassBreakerCheck({ headers: thisArg.headers })) {
                return Reflect.apply(target, thisArg, argumentsList);
              }
              let protectedMethod = circuitBreakers.get(prop);
              if (!protectedMethod) {
                protectedMethod = createCircuitBreaker(target, {
                  group: APIName,
                  name: functionName,
                });

                circuitBreakers.set(prop, protectedMethod);
              }
              return protectedMethod.fire(...argumentsList);
            },
          });
        } else {
          return Reflect.get(target, prop);
        }
      },
    });
  }

  initialize({ context }: DataSourceConfig<SportQLContext>) {
    this.headers = context.sportQLHeaders;
    this.context = context;
  }
}
