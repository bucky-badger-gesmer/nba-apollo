import { NbaAPI } from "./NbaAPI/NbaAPI";

const dataSources = () => {
  return {
    nbaAPI: new NbaAPI(),
  };
};

export type NbaDataSources = ReturnType<typeof dataSources>;

export default dataSources;
