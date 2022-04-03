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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (e) => {
    const aaa = myIndex;
    aaa[e.target.id] = true; //원본이 바꿔져서 setMyIndex를 해도 바낀 값이 없어서 실행 X
    console.log(aaa);
    setMyIndex([...aaa]);
  };

  return (
    <div>
      {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
      {data?.fetchBoards.map((el: any, index: number) => (
        <div key={el._id}>
          {myIndex[index] === false && ( //컴포넌트로 빼기 그리고 각각 state 만들기
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
          {myIndex[index] === true && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
}
