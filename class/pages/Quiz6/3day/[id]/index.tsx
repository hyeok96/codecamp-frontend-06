import { gql, useQuery } from "@apollo/client";
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

export default function QuizDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });
  console.log(data);

  return (
    <div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <br />
      <div>제목: {data?.fetchBoard.title}</div>
      <br />
      {typeof window !== "undefined" && (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          ></div>
          <br />
        </>
      )}
    </div>
  );
}
