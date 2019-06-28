import { prisma } from "../../../../generated/prisma-client"
export default {
  Mutation: {
    createAccount: async (_, args) => {
      const {email, username, firstName = "", bio = ""} = args;
      const user = await prisma.createUser({
        email,
        username,
        firstName,
        bio
      })
      return user
    }
  }
};
