import { gql } from "apollo-server";

export const typeDefs = gql`
  extend type Query {
    team: Team
  }

  type Team {
    commonAllTeams: [CommonTeam]
  }

  type CommonTeam {
    teamId: String
    abbreviation: String
    teamName: String
    simpleName: String
    location: String
  }
`;
