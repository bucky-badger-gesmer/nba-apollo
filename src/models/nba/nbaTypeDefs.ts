import { gql } from "apollo-server";

export const typeDefs = gql`
  extend type Query {
    nba: NBA
  }

  type NBA {
    franchiseHistory: NbaFranchiseHistory
    players: [NbaPlayer] @deprecated(reason: "use NbaPlayerIndex")
    playerIndex: [NbaPlayerIndex]
  }

  type NbaFranchiseHistory {
    franchises: [NbaFranchise]
    defunctFranchises: [NbaFranchise]
  }

  type NbaFranchise {
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

  type NbaPlayer {
    id: ID
    displayLastCommaFirst: String
    displayFirstLast: String
    fromYear: String
    toYear: String
    playerCode: String
    playerSlug: String
  }

  type NbaPlayerIndex {
    id: ID
    lastName: String
    firstName: String
    playerSlug: String
    team: NbaPlayerIndexTeamInfo
    jerseyNumber: String
    position: String
    height: String
    weight: String
    college: String
    country: String
    draft: NbaDraft
    rosterStatus: Float
    headlineStats: NbaPlayerHeadlineStats
    fromYear: String
    toYear: String
  }

  type NbaPlayerIndexTeamInfo {
    id: ID
    slug: String
    city: String
    name: String
    abbreviation: String
  }

  type NbaDraft {
    year: Int
    round: Int
    pick: Int
  }

  type NbaPlayerHeadlineStats {
    points: Float
    rebounds: Float
    assists: Float
    timeFrame: String
  }
`;
