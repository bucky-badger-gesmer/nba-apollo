import { NbaResolvers, Player } from "../../../generated/graphql";
import { SportQLContext } from "../../../types";

export const players: NbaResolvers<SportQLContext>["players"] = async (
  _,
  __,
  { dataSources }
) => {
  const getPlayersResult = await dataSources.nbaAPI.getPlayers();

  const { resultSets } = getPlayersResult;
  const commonAllPlayers = resultSets[0];
  const { headers, rowSet } = commonAllPlayers;

  const players: Player[] = [];
  rowSet.forEach((row) => {
    players.push({
      id: row[headers.indexOf("PERSON_ID")],
      displayLastCommaFirst: row[headers.indexOf("DISPLAY_LAST_COMMA_FIRST")],
      displayFirstLast: row[headers.indexOf("DISPLAY_FIRST_LAST")],
      fromYear: row[headers.indexOf("FROM_YEAR")],
      toYear: row[headers.indexOf("TO_YEAR")],
      playerCode: row[headers.indexOf("PLAYERCODE")],
      playerSlug: row[headers.indexOf("PLAYER_SLUG")],
    });
  });

  return players;
};
