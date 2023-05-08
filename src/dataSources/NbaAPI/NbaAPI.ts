import { RESTDataSource } from "@apollo/datasource-rest";
import { nbaStatsApi } from "../../models/helpers";

export class NbaAPI extends RESTDataSource {
  async getPlayers() {
    try {
      const data = (await nbaStatsApi("commonAllPlayers", "LeagueID=00")).data;
      return {
        resource: data.resource,
        parameters: data.parameters,
        resultSets: data.resultSets,
      };
    } catch (error) {
      console.log("error", error);
    }
  }

  async getFranchiseHistory() {
    try {
      const data = (await nbaStatsApi("franchisehistory", "LeagueId=00")).data;
      return {
        resource: data.resource,
        parameters: data.parameters,
        resultSets: data.resultSets,
      };
    } catch (error) {
      console.log("error", error);
    }
  }

  async getPlayerIndex() {
    try {
      const data = (
        await nbaStatsApi(
          "playerindex",
          "College=&Country=&DraftPick=&DraftRound=&DraftYear=&Height=&Historical=1&LeagueID=00&Season=2022-23&SeasonType=&TeamID=0&Weight="
        )
      ).data;

      return {
        resource: data.resource,
        parameters: data.parameters,
        resultSets: data.resultSets,
      };
    } catch (error) {
      console.log("error", error);
    }
  }
}
