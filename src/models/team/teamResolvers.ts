import teams from "../../data/teams.json";
import { Team } from "../../generated/graphql";

const queryResolvers = {
  team: async (_parent, args, { user }, _info) => {
    return {} as Team;
  },
};

const teamResolvers = {
  commonAllTeams: () => teams,
};

export const resolvers = {
  Query: queryResolvers,
  Team: teamResolvers,
};
