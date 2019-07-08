import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares"

export default {
  Mutation: {
    editUser: (_,args, { request }) => {
      isAuthenticated(request);
      const { username, firstName, bio } = args;
      const { user } = request;
      return prisma.updateUser({
        where:{
          id: user.id
        },
        data:{
          username,
          firstName,
          bio
        }
      })
    }
  }
}
