import type { ExpressContext } from "apollo-server-express";
import { SportQLDataSources } from "./dataSources";
import type { Request } from "express";

export enum SportQLHeaderKey {}

export type SportQLHeaders = Record<SportQLHeaderKey, string>;

export interface SportQLRequest extends Request {
  headers: SportQLHeaders;
}

type DataSourceKeys = keyof SportQLDataSources;

export type ContextDataSources = {
  [K in DataSourceKeys]: SportQLDataSources[K];
};

export interface SportQLContext extends ExpressContext {
  dataSources: ContextDataSources;
  sportQLHeaders: SportQLHeaders;
}
