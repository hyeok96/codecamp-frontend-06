console.log("타입스크립트를 실행했어요");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer, gql } from "apollo-server";

// 1.타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]!
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String 연습용
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제사용
  }
`;

// 2.API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //데이터베이스에 접속해서 게시물 가져오기
      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      //데이터베이스에 접속해서 게시물 등록하기

      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // Board.update({writer: "철수"}, {title: "제목 2"}) 수정
      // Board.update({writer: "철수"}, {deletedAt: new Date}) 수정
      // Board.delete() 삭제

      return "게시물을 등록했습니다.";
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, //cors: {origin: "naver.com"}
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5001,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결 성공");
    // 백엔드 API오픈(24시간동안 접속가능하게끔 대기상태로 만들어 주기)
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결 실패");
  });
