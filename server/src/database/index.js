import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const databaseURL = process.env.DATABASE

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(databaseURL)
        console.log(`MongoDB connected: ${connection.connection.name}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}