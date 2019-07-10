##Fragment ?

prisma 의 경우 connect 으로 서로다른 데이터를 이어줄수있다.

```
{
User{
    post{
      user{
        ...
      }
    }
  }
}
```

위와같은 방법으로 서버에 부하를 주는것을 막기위해 위의 방법은 사용할수없다. 하지만 접근해야할때가 있는데 이때 사용하는 메소드 이다.

### 사용법

```javascript
import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      const post = await prisma.post({ id })
      const comments = await prisma
        .post({ id })
        .comments()
        .$fragment(COMMENT_FRAGMENT);
      const likeCount = await prisma
        .likesConnection({
          where:{ post: { id }}
        })
        .aggregate()
        .count();
      const files = await prisma.post({ id }).files();
      const user = await prisma.post({ id }).user();
      return {
        post,
        comments,
        likeCount,
        files,
        user
      }
    }
  }
}
/*####################################################################*/

export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment{
        id
        text
        user {
            username
        }
    }
`;

```

Comment 의 id, text, user( username ) 에 접근해야할경우 위와같이 적은후 

```
{
	seeFullPost(id:"ID") {
	post{
	...
	}
	comments{
	id
	text
	user{
	
	}
	}
	}
}
```

와 같은 방법으로 접근할수 있다.