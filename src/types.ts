import type { ExpressContext } from "apollo-server-express";
import { NbaDataSources } from "./dataSources";

export enum NbaHeaderKey {
  accept = "*/*",
  host = "stats.nba.com",
  origin = "https://www.nba.com",
  referer = "https://www.nba.com",
}

export type NbaHeaders = Record<NbaHeaderKey, string>;

type DataSourceKeys = keyof NbaDataSources;

export type ContextDataSources = {
  [K in DataSourceKeys]: NbaDataSources[K];
};

export interface NbaContext extends ExpressContext {
  dataSources: ContextDataSources;
  nbaHeaders: NbaHeaders;
}
