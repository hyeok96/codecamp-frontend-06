import BoardCommentPresenter from "./BoardComment.Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CRETAE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.query";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";

export default function BoardCommentContainer() {
  const router = useRouter();

  const [comment, setComment] = useState("");
  const [pw, setPw] = useState("");
  const [writer, setWriter] = useState("");
  const [rating, setRating] = useState(3);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CRETAE_BOARD_COMMENT);

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

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const onClickCreateComment = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.id),
          createBoardCommentInput: {
            writer,
            contents: comment,
            rating,
            password: pw,
          },
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
      setPw("");
      setWriter("");
      setComment("");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDeleteBoardComment = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      const password = prompt("비밀번호");

      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: String((e.target as HTMLDivElement).id),
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

  const handleChange = (value: number) => {
    setRating(value);
  };

  return (
    <BoardCommentPresenter
      onChangeComment={onChangeComment}
      onClickCreateComment={onClickCreateComment}
      onChangePw={onChangePw}
      onChangeRating={onChangeRating}
      onChangeWriter={onChangeWriter}
      commentData={commentData}
      onClickDeleteBoardComment={onClickDeleteBoardComment}
      writer={writer}
      pw={pw}
      contents={comment}
      handleChange={handleChange}
      rating={rating}
    />
  );
}
