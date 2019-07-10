import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { sendSecretMail } from "./utils";
import "./passport"
import { authenticateJwt } from "./passport"
import { isAuthenticated } from "./middlewares.js"

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema, context: ({ request }) => ({ request, isAuthenticated }) });

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
/**/

server.start({ port : 4000 }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);