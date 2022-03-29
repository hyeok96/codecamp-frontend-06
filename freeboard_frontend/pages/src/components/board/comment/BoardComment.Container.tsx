import BoardCommentPresenter from "./BoardComment.Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.query";
import { MouseEvent } from "react";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";

export default function BoardCommentContainer() {
  const router = useRouter();

  const { data: commentData } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteBoardComment = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      const password = prompt("비밀번호");

      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: String((e.currentTarget as HTMLDivElement).id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.id),
            },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentPresenter
      commentData={commentData}
      onClickDeleteBoardComment={onClickDeleteBoardComment}
    />
  );
}
