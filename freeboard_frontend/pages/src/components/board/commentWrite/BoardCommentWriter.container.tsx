import BoardCommentWriterPresenter from "./BoardCommentWrite.presenter";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CRETAE_BOARD_COMMENT } from "./BoardCommentWrite.qurey";
import { FETCH_BOARD_COMMENTS } from "../comment/BoardComment.query";
import { Modal } from "antd";

export default function BoardCommentWriterContainer() {
  const router = useRouter();

  const [comment, setComment] = useState("");
  const [pw, setPw] = useState("");
  const [writer, setWriter] = useState("");
  const [rating, setRating] = useState(3);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CRETAE_BOARD_COMMENT);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      Modal.error({
        content: `${error.message}`,
      });
    }
  };

  const handleChange = (value: number) => {
    setRating(value);
  };

  return (
    <BoardCommentWriterPresenter
      writer={writer}
      pw={pw}
      contents={comment}
      handleChange={handleChange}
      rating={rating}
      onClickCreateComment={onClickCreateComment}
      onChangeComment={onChangeComment}
      onChangePw={onChangePw}
      onChangeRating={onChangeRating}
      onChangeWriter={onChangeWriter}
    />
  );
}
