import { secretGenerator } from "../../../untils"
import { prisma } from "../../../../generated/prisma-client"

export default {
  Mutation: {
    requestSecret: async(_, args) => {
      const { email } = args;
      const loginSecret = await secretGenerator();
      console.log(loginSecret);
      try {
         await prisma.updateUser({data:{ loginSecret },where:{ email }});
         return true;
      } catch(err){
        console.log(err)
        return false;
      }
    }
  }
}
