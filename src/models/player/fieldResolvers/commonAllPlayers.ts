import { apiCall } from "../../helpers";

export const commonAllPlayers = async (parent, args, contextValue, info) => {
  const players = [];
  const resp = await apiCall("commonallplayers");
  const resultSets = resp.data.resultSets[0];

  resultSets.rowSet.forEach((e) => {
    const player = {
      playerId: e[0],
      displayLastCommaFirst: e[1],
      displayFirstLast: e[2],
      rosterStatus: e[3],
      fromYear: e[4],
      toYear: e[5],
      playerCode: e[6],
      teamId: e[7],
      teamCity: e[8],
      teamName: e[9],
      teamAbbreviation: e[10],
      teamCode: e[11],
      teamSlug: e[12],
      gamesPlayedFlag: e[13],
      otherLeagueExperience: e[14],
    };

    players.push(player);
  });

  return players;
};
