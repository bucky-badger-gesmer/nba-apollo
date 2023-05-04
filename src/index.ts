import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./models";
import { NbaAPI } from "./dataSources/NbaAPI/NbaAPI";

interface ContextValue {
  dataSources: {
    nbaAPI: NbaAPI;
  };
}

const startApolloServer = async () => {
  const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV === "staging",
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          nbaAPI: new NbaAPI({ cache }),
        },
      };
    },

    listen: { port: Number(process.env.PORT) || 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startApolloServer();
