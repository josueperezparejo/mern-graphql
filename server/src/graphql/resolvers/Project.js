import Project from "../../models/Project.js"

export const resolvers = {
    Mutation: {
        createProject: async (root, args, context) => {
            const { name, description } = args

            try {
                const project = new Project({
                    name,
                    description
                })

                const savedProject = await project.save()

                return savedProject
    
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        }
    }
}