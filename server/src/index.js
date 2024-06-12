import { startApolloServer } from "./app.js"
import { connectDB } from "./database/index.js"

connectDB()
startApolloServer()