import { NbaResolvers } from "../../../generated/graphql";
import { SportQLContext } from "../../../types";

export const commonAllPlayers: NbaResolvers<SportQLContext>["commonAllPlayers"] =
  async (parent, args, { dataSources }) => {
    const players = await dataSources.nbaAPI.commonAllPlayers();
    return players;
  };
