import gql from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        tasks: [Task]  
        task(_id: ID!):Task

    }

    extend type Mutation {
        createTask(title: String!, projectId: ID!):Task
        deleteTask(_id: ID!):Task
        updateTask(title:String!, projectId: ID!):Task
    }

    type Task {
        _id: ID,
        title: String,
        project: Project,
        createdAt: String,
        updatedAt: String
    }
`