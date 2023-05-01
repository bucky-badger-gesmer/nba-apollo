import type { SportQLContext } from "../types";

export type InitialContext = Pick<
  SportQLContext,
  "req" | "res" | "dataSources"
>;
