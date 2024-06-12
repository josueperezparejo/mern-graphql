import gql from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        tasks: [Task]        
    }

    extend type Mutation {
        createTask(title: String!, projectId: ID!):Task

    }

    type Task {
        _id: ID,
        title: String,
        projectId: ID,
        createdAt: String,
        updatedAt: String
    }
`