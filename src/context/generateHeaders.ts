import { randomUUID } from "crypto";

import { SportQLHeaderKey, SportQLHeaders } from "../types";

import type { InitialContext } from "./types";

export const generateHeaders = (context: InitialContext) => {
  const incomingHeaders = context?.req?.headers || {};
  const baseOutgoingHeaders: Partial<SportQLHeaders> = {};

  const outgoingHeaders = Object.values(SportQLHeaderKey).reduce(
    (outgoingHeaders, key) => {
      const outgoingHeaderValue = outgoingHeaders[key] || incomingHeaders[key];

      return {
        ...outgoingHeaders,
        [key]: outgoingHeaderValue || randomUUID(),
      };
    },
    baseOutgoingHeaders as SportQLHeaders
  );
  return outgoingHeaders;
};
