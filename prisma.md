## Prisma

prisma is ORM

### ORM

Object - Relational - Mapping ( 객체 관계 연결 )

### Why use ORMs

- 데이터베이스 관련 어려운 문제들을 해결
- prisma 는 어플리케이션에 필요한 모델을 graphql 로 정의할 수 있다.
- 손쉽게 데이터베이스를 만들수 있고 눈으로 확인할수 있다.. ( ? )

### 사용법

prisma 를 가입한다.
서비스 만들기 눌러서 설치, 로그인
이후 홈페이지에서 시키는대로 하면

### Update prisma schema

datamodel.prisma 파일을 만들어 데이터 종류 , 타입을 적어준다

```
type Table {
	id : ID! @unique
	email : String!
	pw : Number
  story : [AtherTable!]! @relation (name: "Stories" )
}
type AtherTable {
  id : ID! @unique
  authore : Table @relation (name : "Stories" )
}
```

i => isRequire => NOT NULL; —> graphQL 에서도 사용
@unique —> 2개의 노드가 같은 값을 가질수없다
@default —> default 값
ID —> 자동으로 값을 부여한다 —> 25자의 영, 숫자로 부여 , c 로 시작된다.
[ name! ]! —> 값이 배열로 들어간다.
table @relation(name : key) —> 지정된 table 에서 key 값이 같은것이 묶인다 ( ? ) option : onDelete 
  onDelete—>option 으로 관련된 node 가 삭제됫을경우 같이 삭제되는지 여부 (Default : null, CASCADE : 삭제 )

그 terminal 에 이후 "prisma deploy "  를 입력

### Prisma 를 이용한 data CURD

```
mution{ 
  create"tabe name"({data:{field:value,…….}) {
    //	입력한 field 값이 출력된다
    id
    username
    fristName
 	 .
 	 .
 	 .
	}}
prisma.sh 에 들어가 docs 를 보면 자세히 나와잇음
```

```
/* @relation 된 파일 */
mutation{
	update"tableName"(
		data:{field:{
			connect: {id:value}
		}}
		where:{id:vluae}
	) {
	.
	.
	.
	}
}
```

### &fragment

서버를 공격하는것을 막기위한 수단 

```
{
	allUsers {
		post{
			id{
				post{
					id{
						....
					}
				}
			}
		}
	}
}
```

를  무한히 반복하는것을 막기위한 수단

### 마지막 설정~

모든 설정이 끝나면 prisma generate 를 통해 prisma cloud 에 있는 정보를 서버로 가지고 와서 사용자에게 보여준다
사용자 요청 —> 서버에서 prisma cloud 로 요청 —> cloud 에서 처리 후 서버로 정보전달 —> 서버에서 사용자에게 전달
( 보안이 좋다 )