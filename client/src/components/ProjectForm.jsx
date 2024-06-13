import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects"

export const ProjectForm = () => {

    const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT, {
        refetchQueries: [
            {
                query: GET_PROJECTS
            },
            "getProjects"
        ]
    })

    const [project, setProject] = useState({
        name: '',
        description: ''
    })

    const handleChange = (event) => {
        const { target } = event

        setProject({
            ...project,
            [target.name]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        createProject({
            variables: {
                name: project.name,
                description: project.description
            }
        });

        setProject({
            name: '',
            description: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={project.name} onChange={handleChange} type="text" name="name" placeholder="write a title" />
            <textarea value={project.description} onChange={handleChange} name="description" rows={3} placeholder="write a description"></textarea>
            <button disabled={!project.name || !project.description || loading}>save</button>
        </form>
    )
}
