import Project from "../../models/Project.js"
import Task from "../../models/Task.js"

export const resolvers = {
    Query: {
        tasks: async () => {
            try {
                const tasks = await Task.find()
                return tasks
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        }
    },
    Mutation: {
        createTask: async (root, args, context) => {
            const { title, projectId } = args

            try {
                const projectFound = Project.findById(projectId)

                if (!projectFound) {
                    throw new Error('Project not found')
                }

                const task = new Task({
                    title,
                    projectId
                })

                const savedTask = await task.save()

                return savedTask

            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        }
    }
}