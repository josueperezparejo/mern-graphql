import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    {
        projects {
            id
            name
            description
            createdAt
            updatedAt
            tasks {
            _id
            title
            }
        }
    }
`

export const CREATE_PROJECT = gql`
    mutation ($name: String!, $description: String!){
        createProject(name: $name, description: $description) {
            id
            name
            description
        }
    }
`