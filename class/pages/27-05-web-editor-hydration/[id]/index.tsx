import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDeailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  console.log(data);
  return (
    <div>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" ? (
        // blue가 brown으로 나옴 preLander에서 3ㅓ번쨰 div가 안나옴 근데 하이드레이션에서 업던 div가 생기면서 3번쨰에 Brown 생김 이 문제르 하이드레이션 이수라고 한다.
        // 이 문제를 해결하기 위해서 prelander을 할 때 div갯수를 맞쳐준다. 삼항연산자로 빈껍데기하나를 만들어 준다.
        <div
          style={{ color: "blue" }}
          //  태그들 지워주기
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }}></div>
      )}
      <div style={{ color: "brown" }}>상품가격:</div>
    </div>
  );
}
