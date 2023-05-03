import { Franchise, NbaResolvers } from "../../../generated/graphql";
import { SportQLContext } from "../../../types";

export const franchises: NbaResolvers<SportQLContext>["franchises"] = async (
  _,
  __,
  { dataSources }
) => {
  const getFranchsesResults = await dataSources.nbaAPI.getFranchiseHistory();
  const resultSets = getFranchsesResults.resultSets;
  const franchiseHistory = resultSets[0];
  const defunctTeams = resultSets[1];
  const franchiseHistoryHeaders = franchiseHistory.headers;
  const defunctTeamsHeaders = defunctTeams.headers;
  const franchiseHistoryRowSet = franchiseHistory.rowSet;
  const defunctTeamsRowSet = defunctTeams.rowSet;

  const franchises: Franchise[] = [];
  franchiseHistoryRowSet.forEach((row) => {
    franchises.push({
      leagueId: row[franchiseHistoryHeaders.indexOf("LEAGUE_ID")],
      teamId: row[franchiseHistoryHeaders.indexOf("TEAM_ID")],
      teamCity: row[franchiseHistoryHeaders.indexOf("TEAM_CITY")],
      teamName: row[franchiseHistoryHeaders.indexOf("TEAM_NAME")],
      startYear: row[franchiseHistoryHeaders.indexOf("START_YEAR")],
      endYear: row[franchiseHistoryHeaders.indexOf("END_YEAR")],
      years: row[franchiseHistoryHeaders.indexOf("YEARS")],
      games: row[franchiseHistoryHeaders.indexOf("GAMES")],
      wins: row[franchiseHistoryHeaders.indexOf("WINS")],
      losses: row[franchiseHistoryHeaders.indexOf("LOSSES")],
      winPct: row[franchiseHistoryHeaders.indexOf("WIN_PCT")],
      playoffAppearances:
        row[franchiseHistoryHeaders.indexOf("PO_APPEARANCES")],
      divisionTitles: row[franchiseHistoryHeaders.indexOf("DIV_TITLES")],
      conferenceTitles: row[franchiseHistoryHeaders.indexOf("CONF_TITLES")],
      leagueTitles: row[franchiseHistoryHeaders.indexOf("LEAGUE_TITLES")],
    });
  });

  const defunctFranchises: Franchise[] = [];
  defunctTeamsRowSet.forEach((row) => {
    defunctFranchises.push({
      leagueId: row[defunctTeamsHeaders.indexOf("LEAGUE_ID")],
      teamId: row[defunctTeamsHeaders.indexOf("TEAM_ID")],
      teamCity: row[defunctTeamsHeaders.indexOf("TEAM_CITY")],
      teamName: row[defunctTeamsHeaders.indexOf("TEAM_NAME")],
      startYear: row[defunctTeamsHeaders.indexOf("START_YEAR")],
      endYear: row[defunctTeamsHeaders.indexOf("END_YEAR")],
      years: row[defunctTeamsHeaders.indexOf("YEARS")],
      games: row[defunctTeamsHeaders.indexOf("GAMES")],
      wins: row[defunctTeamsHeaders.indexOf("WINS")],
      losses: row[defunctTeamsHeaders.indexOf("LOSSES")],
      winPct: row[defunctTeamsHeaders.indexOf("WIN_PCT")],
      playoffAppearances: row[defunctTeamsHeaders.indexOf("PO_APPEARANCES")],
      divisionTitles: row[defunctTeamsHeaders.indexOf("DIV_TITLES")],
      conferenceTitles: row[defunctTeamsHeaders.indexOf("CONF_TITLES")],
      leagueTitles: row[defunctTeamsHeaders.indexOf("LEAGUE_TITLES")],
    });
  });
  console.log("franchises", franchises);

  return franchises;
};
