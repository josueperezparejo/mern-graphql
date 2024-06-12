import { gql } from "graphql-tag"
import { resolvers as ProjectResolver } from "./resolvers/Project.js"
import { typeDefs as ProjectTypeDefs } from "./typeDefs/Project.js"

const rootTypeDefs = gql`
    type Query {
        hello: String
    }
    type Mutation {
        hello: String
    }
`

const rootResolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        }
    },
    Mutation: {
        hello: () => {
            return "Hello World"
        }
    }
}

export const typeDefs = [rootTypeDefs, ProjectTypeDefs]
export const resolvers = [rootResolvers, ProjectResolver]