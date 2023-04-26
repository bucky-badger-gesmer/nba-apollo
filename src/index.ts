import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

const teams = [
  {
    id: 1610612737,
    name: "Atlanta Hawks",
  },
  {
    id: 1610612738,
    name: "Boston Celtics",
  },
  {
    id: 1610612751,
    name: "Brooklyn Nets",
  },
  {
    id: 1610612766,
    name: "Charlotte Hornets",
  },
  {
    id: 1610612741,
    name: "Chicago Bulls",
  },
  {
    id: 1610612739,
    name: "Cleveland Cavaliers",
  },
  {
    id: 1610612742,
    name: "Dallas Mavericks",
  },
  {
    id: 1610612743,
    name: "Denver Nuggets",
  },
  {
    id: 1610612765,
    name: "Detroit Pistons",
  },
  {
    id: 1610612744,
    name: "Golden State Warriors",
  },
  {
    id: 1610612745,
    name: "Houston Rockets",
  },
  {
    id: 1610612754,
    name: "Indiana Pacers",
  },
  {
    id: 1610612746,
    name: "Los Angeles Clippers",
  },
  {
    id: 1610612747,
    name: "Los Angeles Lakers",
  },
  {
    id: 1610612763,
    name: "Memphis Grizzlies",
  },
  {
    id: 1610612748,
    name: "Miami Heat",
  },
  {
    id: 1610612749,
    name: "Milwaukee Bucks",
  },
  {
    id: 1610612750,
    name: "Minnesota Timberwolves",
  },
  {
    id: 1610612740,
    name: "New Orleans Pelicans",
  },
  {
    id: 1610612752,
    name: "New York Knicks",
  },
  {
    id: 1610612760,
    name: "Oklahoma City Thunder",
  },
  {
    id: 1610612753,
    name: "Orlando Magic",
  },
  {
    id: 1610612755,
    name: "Philadelphia 76ers",
  },
  {
    id: 1610612756,
    name: "Phoenix Suns",
  },
  {
    id: 1610612757,
    name: "Portland Trail Blazers",
  },
  {
    id: 1610612758,
    name: "Sacramento Kings",
  },
  {
    id: 1610612759,
    name: "San Antonio Spurs",
  },
  {
    id: 1610612761,
    name: "Toronto Raptors",
  },
  {
    id: 1610612762,
    name: "Utah Jazz",
  },
  {
    id: 1610612764,
    name: "Washington Wizards",
  },
];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Player {
    id: Int
    name: String
  }

  type Team {
    id: Int
    name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    players: [Player]
    teams: [Team]
  }
`;

const apiCall = async (endpoint: string) => {
  return axios.get(`https://stats.nba.com/stats/${endpoint}`, {
    headers: {
      accept: "*/*",
      host: "stats.nba.com",
      origin: "https://www.nba.com",
      referer: "https://www.nba.com",
    },
  });
};

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    players: async (_) => {
      const players = [];
      const resp = await apiCall("commonallplayers?LeagueID=00");
      const resultSets = resp.data.resultSets[0];
      for (let i = 0; i < resultSets.rowSet.length; i++) {
        if (Number(resultSets.rowSet[i][5]) === 2022) {
          players.push({
            id: resultSets.rowSet[i][0],
            name: resultSets.rowSet[i][2],
          });
        }
      }

      return players;
    },
    teams: async (_) => {
      return teams;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT) || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);


