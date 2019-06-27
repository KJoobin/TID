It's clone by instargram
i will use react, react-native, node, Prisma, GraphQL ...

require : npm, node ( -v10 이상 ), (git)

1. npm init
2. npm install graphql-yoga
3. npm install nodemon -D
4. npm install bable-cli -D
            5. src/server.js  파일 만들기
            6. package.jsno 파일에
            "scripts":{
              "start" : "nodemon --exec bable-node src/server.js"
            }
            추가
            7. nodemon.json 파일 생성
            8. {
              "exit":"js graphql"
            }
            작성
9. npm install @babel/{node, core, preset-env}
( localhost:4000 작동 확인 ) 
10. npm install morgan
