import Project from "../../models/Project.js"
import Task from "../../models/Task.js"

export const resolvers = {
    Query: {
        projects: async () => {
            try {
                const projects = await Project.find()
                return projects
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        },
        project: async (root, args, context) => {
            const { _id } = args
            try {
                const project = await Project.findById(_id)
                return project
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        }
    },
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
        },
        deleteProject: async (root, args, context) => {
            const { _id } = args
            try {
                const deletedProject = await Project.findByIdAndDelete(_id)
                if (!deletedProject) throw new Error('Project not found')

                await Task.deleteMany({ projectId: deletedProject._id })
                
                return deletedProject
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        },
        updateProject: async (root, args, context) => {
            const { _id } = args
            try {
                const updatedProject = await Project.findByIdAndUpdate(_id, args, { new: true })
                if (!updatedProject) throw new Error('Project not found')
                return updatedProject
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        }
    }
}