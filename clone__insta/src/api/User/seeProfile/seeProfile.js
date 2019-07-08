import { prisma } from "../../../../generated/prisma-client"
import { isAuthenticated } from "../../../middlewares"

export default {
  Query:{
    seeProfile: async (_, args) => {
      const { id } = args;
      const user = await prisma.user({ id })
      const posts = await prisma.user({ id }).posts()
      return {
        user,posts
      }
    }
  },
}
