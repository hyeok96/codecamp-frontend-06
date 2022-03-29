import BoardCommentPresenter from "./BoardComment.Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.query";
import { useState } from "react";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function BoardCommentContainer() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

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

  const onchangeCommentPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onClickModal = async () => {
    setIsOpen(!isOpen);
  };

  const onClickDeleteBoardComment = async (a: any) => {
    try {
      console.log(a);
      setIsOpen(!isOpen);
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: String(a),
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
      Modal.success({
        content: `댓글이 삭제되었습니다.`,
      });
    } catch (error) {
      Modal.error({
        content: `${error.message}`,
      });
    }
  };

  return (
    <>
      <BoardCommentPresenter
        commentData={commentData}
        onClickDeleteBoardComment={onClickDeleteBoardComment}
        onToggle={onToggle}
        onchangeCommentPassword={onchangeCommentPassword}
        isOpen={isOpen}
        onClickModal={onClickModal}
      />
    </>
  );
}
