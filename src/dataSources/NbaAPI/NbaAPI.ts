import { DataSource, DataSourceConfig } from "apollo-datasource";
import { NBAClient } from "../../api/NBA";
import { NbaContext } from "../../types";
import { NbaDataSource } from "../NbaDataSource";

export class NbaAPI extends NbaDataSource {
  constructor() {
    super();
  }

  private Nba: NBAClient;

  initialize(args: DataSourceConfig<NbaContext>): void {
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
      const resp = await this.Nba.playerController.commonAllPlayers({
        leagueId: "00",
      });
      console.log("resp", resp);
      return resp;
    } catch (error) {
      console.log("error", error);
      // throw new Error(error);
    }
  };
}
