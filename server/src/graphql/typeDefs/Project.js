import gql from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        projects: [Project]
        project(_id: ID!):Project
    }

    extend type Mutation {
        createProject(name: String!, description: String!):Project
        deleteProject(_id: ID!):Project
        updateProject(name:String!, description:String!):Project
    }

    type Project {
        id: ID,
        name: String,
        description: String,
        createdAt: String,
        updatedAt: String
    }
`