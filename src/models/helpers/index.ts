import axios from "axios";

export const nbaStatsApi = async (endpoint: string, queryParams?: string) => {
  return axios.get(`https://stats.nba.com/stats/${endpoint}?${queryParams}`, {
    headers: {
      accept: "*/*",
      host: "stats.nba.com",
      origin: "https://www.nba.com",
      referer: "https://www.nba.com",
    },
  });
};
