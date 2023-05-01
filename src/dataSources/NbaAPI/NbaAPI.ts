import { DataSourceConfig } from "apollo-datasource";
import { NBAClient } from "../../api/nba";
import { SportQLContext } from "../../types";
import { SportQLDataSource } from "../SportQLDataSource";

export class NbaAPI extends SportQLDataSource {
  constructor() {
    super();
  }

  private Nba: NBAClient;

  initialize(args: DataSourceConfig<SportQLContext>): void {
    super.initialize(args);
    this.Nba = new NBAClient({
      HEADERS: {
        ...this.headers,
        accept: "*/*",
        host: "stats.nba.com",
        origin: "https://www.nba.com",
        referer: "https://www.nba.com",
      },
    });
  }

  commonAllPlayers = async () => {
    try {
      console.log("trying...");
      return await this.Nba.playerController.commonAllPlayers({
        leagueId: "00",
      });
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  };
}
