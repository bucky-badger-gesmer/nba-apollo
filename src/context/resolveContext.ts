import { ContextFunction } from "apollo-server-core";
import type { SportQLContext } from "../types";
import { generateHeaders } from "./generateHeaders";
import { InitialContext } from "./types";

export const resolveContext: ContextFunction<
  InitialContext,
  SportQLContext
> = async (initialContext) => {
  const sportQLHeaders = generateHeaders(initialContext);

  return {
    ...initialContext,
    sportQLHeaders,
  };
};
