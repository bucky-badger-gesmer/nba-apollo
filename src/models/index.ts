import { gql } from "apollo-server";
import merge from "lodash.merge";

import * as NBA from "./nba/nba";

const Query = gql`
  type Query {
    _: String
  }
`;

export const typeDefs = [Query, NBA.typeDefs];

export const resolvers = merge({}, NBA.resolvers);
