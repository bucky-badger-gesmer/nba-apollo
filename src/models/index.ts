import { gql } from "apollo-server";
import merge from "lodash.merge";

import * as Player from "./player/player";
import * as Team from "./team/team";

const Query = gql`
  type Query {
    _: String
  }
`;

export const typeDefs = [Query, Player.typeDefs, Team.typeDefs];

export const resolvers = merge({}, Player.resolvers, Team.resolvers);
