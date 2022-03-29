import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardIdPresenter from "./BoardId.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardId.graph";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../common/types/generated/types";

import { Modal } from "antd";

export default function BoardIdContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickDelete = (event: MouseEvent<HTMLDivElement>) => {
    deleteBoard({
      variables: { boardId: (event.target as HTMLButtonElement).id },
    });
    Modal.success({
      content: "게시글이 삭제되었습니다.",
    });
    router.push("/boards");
  };

  const onClickUpdateMove = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickBoardListMove = () => {
    router.push(`/boards`);
  };

  const onClickLikeBoard = () => {
    likeBoard({
      variables: {
        boardId: String(router.query.id),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.id),
          },
        },
      ],
    });
  };

  const onClickDisLikeBoard = () => {
    dislikeBoard({
      variables: {
        boardId: String(router.query.id),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.id),
          },
        },
      ],
    });
  };

  return (
    <BoardIdPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdateMove={onClickUpdateMove}
      onClickBoardListMove={onClickBoardListMove}
      onClickLikeBoard={onClickLikeBoard}
      onClickDisLikeBoard={onClickDisLikeBoard}
    />
  );
}
