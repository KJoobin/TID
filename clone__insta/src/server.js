import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(__dirname,'.env')})
import { GraphQLServer } from "graphql-yoga"
import logger from "morgan"
import schema from "./schema"

console.log(process.env.PORT);

const PORT = process.env.PORT || 4000;
// const typeDefs = `
//   type Query{
//     hello:String!
//   }
// `;
//
// const resolvers = {
//   Query:{
//     hello : () => "Hi"
//   }
// }

const server = new GraphQLServer( { schema})

server.express.use(logger("dev"))

server.start({port : PORT}, () => console.log(`Server running ${PORT}`))
