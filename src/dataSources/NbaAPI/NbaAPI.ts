import { RESTDataSource } from "@apollo/datasource-rest";
import { apiCall } from "../../models/helpers";

export class NbaAPI extends RESTDataSource {
  async getPlayers() {
    try {
      const data = (await apiCall("commonAllPlayers")).data;
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
