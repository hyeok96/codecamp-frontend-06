import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      writer
      title
      contents
      _id
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;
export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(-1);

  const onClickEdit = (e) => {
    setMyIndex(Number(e.target.id));
  };

  return (
    <div>
      {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
      {data?.fetchBoards.map((el: any, index: number) => (
        <div key={el._id}>
          {index !== myIndex && (
            <MyRow>
              <MyColumn>
                <input type="checkbox" />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={String(index)} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {index === myIndex && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
}
