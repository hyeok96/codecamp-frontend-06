import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardID: ID!) {
    fetchBoard(boardId: $boardID) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardID: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "626753caa8255b002988ca8c",
    },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: {
        boardId: "626753caa8255b002988ca8c",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "626753caa8255b002988ca8c" },
      //     },
      //   ],
      //   data를 받기 전에 먼저 한번 받아서 {data}에 들어거서 요청 오기전에 likeBoard를 넣어주고 data가 성공적으로 들어오면 그걸고 바꿔주고 실패하면 실패한 내용을 보여준다.
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      // update가 있으면 likeBoard를 data의 결과물이 담긴다.
      update(cache, { data }) {
        // 우리가 직접 쓰겠다는 것!!
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "626753caa8255b002988ca8c" },
          data: {
            fetchBoard: {
              // _id와 __typename은 필수!!
              _id: "626753caa8255b002988ca8c",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵피미스킥UI</h1>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기!</button>
    </div>
  );
}
