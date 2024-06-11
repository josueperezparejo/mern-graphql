import http from "http"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { resolvers, typeDefs } from './graphql/schema.js'

dotenv.config()

const port = process.env.PORT || 5000

export async function startApolloServer() {
    
    const app = express()
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });

    await server.start()

    app.use('/graphql', cors(), express.json(), expressMiddleware(server))

    await new Promise((resolve) => httpServer.listen({ port: port }, resolve));

    console.log(`Server running on port http://localhost:${port}/graphql`)
}