import axios from "axios";

export const apiCall = async (endpoint: string, params?: string) => {
  return axios.get(
    `https://stats.nba.com/stats/${endpoint}?LeagueID=00&${params}`,
    {
      headers: {
        accept: "*/*",
        host: "stats.nba.com",
        origin: "https://www.nba.com",
        referer: "https://www.nba.com",
      },
    }
  );
};
