import { NbaAPI } from "./NbaAPI/NbaAPI";

const dataSources = () => {
  return {
    nbaAPI: new NbaAPI(),
  };
};

export type SportQLDataSources = ReturnType<typeof dataSources>;

export default dataSources;
