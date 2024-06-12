import gql from "graphql-tag";

export const typeDefs = gql`
    extend type Mutation {
        createProject(name: String!, description: String!):Project
    }

    type Project {
        id: ID,
        name: String,
        description: String,
        createdAt: String,
        updatedAt: String
    }
`