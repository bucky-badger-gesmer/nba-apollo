// import {
//   CommonPlayer,
//   Player,
//   PlayerResolvers,
//   QueryResolvers,
// } from "../../generated/graphql";
import { apiCall } from "../helpers";
import { commonAllPlayers } from "./fieldResolvers";

const playerResolvers = {
  player: async () => {
    return {
      commonAllPlayers: [
        {
          playerId: "123",
        },
      ],
    };
  },
};

export const resolvers = {
  // Player: playerResolvers,
};
