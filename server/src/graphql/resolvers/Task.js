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
        },
        task: async (root, args, context) => {
            const { _id } = args
            try {
                const task = await Task.findById(_id)
                return task
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
        },
        deleteTask: async (root, args, context) => {
            const { _id } = args
            try {
                const deletedTask = await Task.findByIdAndDelete(_id)
                return deletedTask
            } catch (error) {
                console.log(`Error: ${error.message}`)
            }
        }
    }
}