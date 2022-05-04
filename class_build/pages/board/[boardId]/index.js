import { useRouter } from "next/router";
import Head from "next/head";
import { request, gql } from "graphql-request";

export default function BoardDetailPage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meat property="og:title" content={props.myBoardData?.title} />
        <meat property="og:descrition" content={props.myBoardData?.contents} />
        <meat property="og:image" content={props.myBoardData?.images[0]} />
      </Head>
      <div>
        안녕하세요 게사글 상세페이지입니다. 게사글 아이디는{" "}
        {router.query.boardId}
        입니다
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardID: $boardId) {
      title
      contents
      images
    }
  }
`;

// 서버사이드랜더링 페이지
export const getServerSideProps = async (context) => {
  // 데이터호출
  // const {data} = useQuery(FETCH_BOARD) 안됨
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      myBoardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
