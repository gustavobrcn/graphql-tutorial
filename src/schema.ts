export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
`;
// ----------------- Notes -----------------
//GraphQL has 5 basic scaler types
// int, float. string. boolean, ID
// [String] - array of strings
// ! - field is required and not allowed to be null
// [String!]! - strings inside cant be null and value itself cant be null
// Query type is needed and specifies the entry point of each graph and the return types
// specify that users can make calls for specific item with variable
