import { players } from "./fieldResolvers";
import { Nba, QueryResolvers } from "../../generated/graphql";
import { SportQLContext } from "../../types";

const queryResolvers: QueryResolvers<SportQLContext> = {
  nba: async (_parent, args, context, _info) => {
    return {} as Nba;
  },
};

const nbaResolvers = {
  players,
};

export const resolvers = {
  Query: queryResolvers,
  Nba: nbaResolvers,
};
