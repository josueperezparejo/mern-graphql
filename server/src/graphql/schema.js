import {gql} from "graphql-tag"

const rootTypeDefs = gql`
    type Query {
        hello: String
    }
`

const rootResolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        }
    }
}

export const typeDefs = [rootTypeDefs]
export const resolvers = [rootResolvers]