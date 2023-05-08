import { NbaPlayerIndex, NbaResolvers } from "../../../generated/graphql";
import { SportQLContext } from "../../../types";

export const playerIndex: NbaResolvers<SportQLContext>["playerIndex"] = async (
  _,
  __,
  { dataSources }
) => {
  const getPlayerIndexResult = await dataSources.nbaAPI.getPlayerIndex();

  const { resultSets } = getPlayerIndexResult;
  const playerIndex = resultSets[0];
  const { headers, rowSet } = playerIndex;

  const players: NbaPlayerIndex[] = [];
  rowSet.forEach((row) => {
    players.push({
      id: row[headers.indexOf("PERSON_ID")],
      lastName: row[headers.indexOf("PLAYER_LAST_NAME")],
      firstName: row[headers.indexOf("PLAYER_FIRST_NAME")],
      playerSlug: row[headers.indexOf("PLAYER_SLUG")],
      team: {
        id: row[headers.indexOf("TEAM_ID")],
        slug: row[headers.indexOf("TEAM_SLUG")],
        city: row[headers.indexOf("TEAM_CITY")],
        name: row[headers.indexOf("TEAM_NAME")],
        abbreviation: row[headers.indexOf("TEAM_ABBREVIATION")],
      },
      jerseyNumber: row[headers.indexOf("JERSEY_NUMBER")],
      position: row[headers.indexOf("POSITION")],
      height: row[headers.indexOf("HEIGHT")],
      weight: row[headers.indexOf("WEIGHT")],
      college: row[headers.indexOf("COLLEGE")],
      country: row[headers.indexOf("COUNTRY")],
      draft: {
        year: row[headers.indexOf("DRAFT_YEAR")],
        round: row[headers.indexOf("DRAFT_ROUND")],
        pick: row[headers.indexOf("DRAFT_NUMBER")],
      },
      rosterStatus: row[headers.indexOf("ROSTER_STATUS")],
      headlineStats: {
        points: row[headers.indexOf("PTS")],
        rebounds: row[headers.indexOf("REB")],
        assists: row[headers.indexOf("AST")],
        timeFrame: row[headers.indexOf("STATS_TIMEFRAME")],
      },
      fromYear: row[headers.indexOf("FROM_YEAR")],
      toYear: row[headers.indexOf("TO_YEAR")],
    });
  });

  return players;
};
