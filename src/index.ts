import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "../_db";

// types
import { typeDefs } from "./schema";

const resolvers = {
  Query: {
    games() {
      return db.games; // apollo will know to only return the specific fields requested in the query, it only needs to know where the data is in the db
    },
    game(_: any, args: { id: any }) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_: any, args: { id: any }) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_: any, args: { id: any }) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
};
// server setup
const server = new ApolloServer({
  //typeDefs - data types and the relationship they have to other data types
  // resolver = resolver functions on how we respond to different queries on the graph
  // these two properties create the schema which describes the shape of the data
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
