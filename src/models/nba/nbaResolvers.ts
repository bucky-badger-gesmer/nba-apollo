import { franchiseHistory, playerIndex, players } from "./fieldResolvers";
import { QueryResolvers } from "../../generated/graphql";
import { SportQLContext } from "../../types";
import { Nba } from "../../generated/graphql";

const queryResolvers: QueryResolvers<SportQLContext> = {
  nba: async () => {
    return {} as Nba;
  },
};

const nbaResolvers = {
  franchiseHistory,
  playerIndex,
  players,
};

export const resolvers = {
  Query: queryResolvers,
  NBA: nbaResolvers,
};
