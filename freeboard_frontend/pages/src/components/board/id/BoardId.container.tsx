import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardIdPresenter from "./BoardId.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  CRETAE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardId.graph";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../common/types/generated/types";

export default function BoardIdContainer() {
  const [comment, setComment] = useState("");
  const [pw, setPw] = useState("");
  const [writer, setWriter] = useState("");
  const [rating, setRating] = useState(0);

  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
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

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  const onClickDelete = (event: MouseEvent<HTMLDivElement>) => {
    deleteBoard({
      variables: { boardId: (event.target as HTMLButtonElement).id },
    });
    alert("게시물이 삭제되었습니다.");
    router.push("/boards");
  };

  const onClickUpdateMove = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickBoardListMove = () => {
    router.push(`/boards`);
  };

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

      //   refetchQueries: [{ query: FETCH_BOARD_COMMENTS }],
    });
    alert("댓글을 생성했습니다.");
  };

  return (
    <BoardIdPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdateMove={onClickUpdateMove}
      onClickBoardListMove={onClickBoardListMove}
      onChangeComment={onChangeComment}
      onClickCreateComment={onClickCreateComment}
      onChangePw={onChangePw}
      onChangeRating={onChangeRating}
      onChangeWriter={onChangeWriter}
      commentData={commentData}
    />
  );
}
