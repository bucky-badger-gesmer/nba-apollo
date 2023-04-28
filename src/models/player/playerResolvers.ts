import { Player } from "../../generated/graphql";
import { commonAllPlayers } from "./fieldResolvers";

const queryResolvers = {
  player: async (_parent, args, { user }, _info) => {
    return {} as Player;
  },
};

const playerResolvers = {
  commonAllPlayers,
};

export const resolvers = {
  Query: queryResolvers,
  Player: playerResolvers,
};
