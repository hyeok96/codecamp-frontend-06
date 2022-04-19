import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import * as s from "./style";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      contents
      title
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function Quiz6() {
  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [input, setInput] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clickDelete = (boardId: any) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deleteId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filterPrev = prev.filter(
                (el: any) => readField("_id", el) !== deleteId
              );
              return [...filterPrev];
            },
          },
        });
      },
    });
  };

  const clickBtn = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          ...input,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <s.Main>
      {data?.fetchBoards.map((el: any) => (
        <s.Wrapper key={el._id}>
          <s.Div>{el.writer}</s.Div>
          <s.Div>{el.title}</s.Div>
          <s.Div>{el._id.slice(0, 4)}</s.Div>
          <s.Div onClick={clickDelete(el._id)}>삭제</s.Div>
        </s.Wrapper>
      ))}
      작성자: <input name="writer" onChange={onChangeInput} />
      비밀번호:{" "}
      <input name="password" type="password" onChange={onChangeInput} />
      제목: <input name="title" onChange={onChangeInput} />
      내용: <input name="contents" onChange={onChangeInput} />
      <button onClick={clickBtn}>등록하기</button>
    </s.Main>
  );
}
