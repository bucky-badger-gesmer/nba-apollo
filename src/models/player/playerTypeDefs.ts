import { gql } from "apollo-server";

export const typeDefs = gql`
  extend type Query {
    commonAllPlayers: [CommonPlayer]
  }

  """
  Available fields returned per player when commonAllPlayers is called
  """
  type CommonPlayer {
    playerId: String
    displayLastCommaFirst: String
    displayFirstLast: String
    rosterStatus: String
    fromYear: String
    toYear: String
    playerCode: String
    playerSlug: String
    teamId: String
    teamCity: String
    teamName: String
    teamAbbreviation: String
    teamCode: String
    teamSlug: String
    gamesPlayedFlag: String
    otherLeagueExperienceCh: String
  }
`;
