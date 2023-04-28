import { gql } from "apollo-server";
import merge from "lodash.merge";

import * as Team from "./team/team";

const Query = gql`
  type Query {
    _: String
  }
`;

export const typeDefs = [Query, Team.typeDefs];

export const resolvers = merge({}, Team.resolvers);
