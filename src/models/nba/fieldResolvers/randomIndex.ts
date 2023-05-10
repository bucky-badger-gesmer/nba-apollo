import { NbaResolvers } from "../../../generated/graphql";
import { SportQLContext } from "../../../types";

export const randomIndex: NbaResolvers<SportQLContext>["randomIndex"] = async (
  _,
  __,
  { dataSources }
) => {
  const getPlayerIndexResult = await dataSources.nbaAPI.getPlayerIndex();

  const { resultSets } = getPlayerIndexResult;
  const playerIndex = resultSets[0];
  const { rowSet } = playerIndex;

  return Math.floor(Math.random() * rowSet.length);
};
