import { gql } from "apollo-server";

export const typeDefs = gql`
  extend type Query {
    nba: NBA
  }

  type NBA {
    franchiseHistory: FranchiseHistory
    players: [Player]
  }

  type FranchiseHistory {
    franchises: [Franchise]
    defunctFranchises: [Franchise]
  }

  type Franchise {
    leagueId: String
    teamId: ID
    teamCity: String
    teamName: String
    startYear: String
    endYear: String
    years: Int
    games: Int
    wins: Int
    losses: Int
    winPct: Float
    playoffAppearances: Int
    divisionTitles: Int
    conferenceTitles: Int
    leagueTitles: Int
  }

  type Player {
    id: ID
    displayLastCommaFirst: String
    displayFirstLast: String
    fromYear: String
    toYear: String
    playerCode: String
    playerSlug: String
  }
`;
