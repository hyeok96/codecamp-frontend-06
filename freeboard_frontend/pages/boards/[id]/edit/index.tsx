import BoardNewContainer from "../../../src/components/board/new/BoardNew.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      _id
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function UpadteBoardPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  console.log(data);
  return <BoardNewContainer isEdit={true} data={data} />;
}
