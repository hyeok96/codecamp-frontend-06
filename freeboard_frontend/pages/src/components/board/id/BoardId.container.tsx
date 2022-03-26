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
  const [sellect1, setSellect1] = useState(false);
  const [sellect2, setSellect2] = useState(false);
  const [sellect3, setSellect3] = useState(false);
  const [sellect4, setSellect4] = useState(false);
  const [sellect5, setSellect5] = useState(false);

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

  const onClickRating1 = (e: MouseEvent<HTMLDivElement>) => {
    setSellect1(!sellect1);

    if (
      sellect5 === true ||
      (sellect5 === false && sellect4 === true) ||
      (sellect4 === false && sellect3 === true) ||
      (sellect3 === false && sellect2 === true)
    ) {
      setSellect5(false);
      setSellect4(false);
      setSellect3(false);
      setSellect2(false);
      setSellect2(false);
      setSellect1(true);
    }

    if (sellect1 === true) {
      setRating(rating + 1);
    } else {
      setRating(rating - 1);
    }
  };

  const onClickRating2 = (e: MouseEvent<HTMLDivElement>) => {
    setSellect2(!sellect2);
    if (sellect1 === false && sellect2 === false) {
      setSellect1(true);
    } else if (sellect1 === true && sellect2 === false) {
      setSellect1(true);
    }

    if (
      sellect5 === true ||
      (sellect5 === false && sellect4 === true) ||
      (sellect4 === false && sellect3 === true && sellect2 === true)
    ) {
      setSellect5(false);
      setSellect4(false);
      setSellect3(false);
      setSellect2(true);
    }

    if (sellect2 === true) {
      setRating(rating + 1);
    } else {
      setRating(rating - 1);
    }
  };

  const onClickRating3 = (e: MouseEvent<HTMLDivElement>) => {
    setSellect3(!sellect3);

    if (sellect1 === false && sellect2 === false && sellect3 === false) {
      setSellect1(true);
      setSellect2(true);
    } else if (sellect1 === true && sellect2 === false && sellect3 === false) {
      setSellect1(true);
      setSellect2(true);
    } else if (sellect1 === true && sellect2 === true && sellect3 === false) {
      setSellect1(true);
      setSellect2(true);
    }

    if (
      sellect5 === true ||
      (sellect5 === false && sellect4 === true && sellect3 === true)
    ) {
      setSellect5(false);
      setSellect4(false);
      setSellect3(true);
    }

    if (sellect3 === true) {
      setRating(rating + 1);
    } else {
      setRating(rating - 1);
    }
  };

  const onClickRating4 = (e: MouseEvent<HTMLDivElement>) => {
    setSellect4(!sellect4);

    if (
      sellect1 === false &&
      sellect2 === false &&
      sellect3 === false &&
      sellect4 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
    } else if (
      sellect1 === true &&
      sellect2 === false &&
      sellect3 === false &&
      sellect4 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
    } else if (
      sellect1 === true &&
      sellect2 === true &&
      sellect3 === false &&
      sellect4 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
    } else if (
      sellect1 === true &&
      sellect2 === true &&
      sellect3 === true &&
      sellect4 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
    }

    if (sellect5 === true && sellect4 === true) {
      setSellect5(false);
      setSellect4(true);
    }

    if (sellect4 === true) {
      setRating(rating + 1);
    } else {
      setRating(rating - 1);
    }
  };

  const onClickRating5 = (e: MouseEvent<HTMLDivElement>) => {
    setSellect5(!sellect5);

    if (
      sellect1 === false &&
      sellect2 === false &&
      sellect3 === false &&
      sellect4 === false &&
      sellect5 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
      setSellect4(true);
    } else if (
      sellect1 === true &&
      sellect2 === false &&
      sellect3 === false &&
      sellect4 === false &&
      sellect5 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
      setSellect4(true);
    } else if (
      sellect1 === true &&
      sellect2 === true &&
      sellect3 === false &&
      sellect4 === false &&
      sellect5 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
      setSellect4(true);
    } else if (
      sellect1 === true &&
      sellect2 === true &&
      sellect3 === true &&
      sellect4 === false &&
      sellect5 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
      setSellect4(true);
    } else if (
      sellect1 === true &&
      sellect2 === true &&
      sellect3 === true &&
      sellect4 === true &&
      sellect5 === false
    ) {
      setSellect1(true);
      setSellect2(true);
      setSellect3(true);
      setSellect4(true);
    }

    if (sellect5 === true) {
      setRating(rating + 1);
    } else {
      setRating(rating - 1);
    }
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
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
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
      onChangeComment={onChangeComment}
      onClickCreateComment={onClickCreateComment}
      onChangePw={onChangePw}
      onChangeRating={onChangeRating}
      onChangeWriter={onChangeWriter}
      commentData={commentData}
      sellect1={sellect1}
      sellect2={sellect2}
      sellect3={sellect3}
      sellect4={sellect4}
      sellect5={sellect5}
      onClickRating1={onClickRating1}
      onClickRating2={onClickRating2}
      onClickRating3={onClickRating3}
      onClickRating4={onClickRating4}
      onClickRating5={onClickRating5}
    />
  );
}
