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
          return new Proxy(target[prop], {});
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
