import { gql } from "apollo-server";

export const typeDefs = gql`
  extend type Query {
    nba: Nba
  }

  type Nba {
    players: [Player]
  }

  type Player {
    id: String
    displayLastCommaFirst: String
    displayFirstLast: String
    fromYear: String
    toYear: String
    playerCode: String
    playerSlug: String
  }
`;
