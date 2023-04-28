import teams from "../../data/teams";

const queryResolvers = {};

const teamResolvers = {
  // allTeams: teams,
};

export const resolvers = {
  Query: queryResolvers,
  Team: teamResolvers,
};
