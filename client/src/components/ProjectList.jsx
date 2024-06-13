import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../graphql/projects"

export const ProjectList = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fecthing data</p>

    console.log({error, data})

    return (
        <div>
            {
                data.projects.map(project => {
                    return (
                        <div key={project._id}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
