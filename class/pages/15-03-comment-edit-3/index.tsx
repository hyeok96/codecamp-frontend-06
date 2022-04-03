import { useQuery, gql } from "@apollo/client";

import { useState } from "react";
import BoardCommentItem from "../src/components/units/board/15-BoardComment";

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

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const onClickEdit = (e) => {
  //   const aaa = myIndex;
  //   aaa[e.target.id] = true; //원본이 바꿔져서 setMyIndex를 해도 바낀 값이 없어서 실행 X
  //   console.log(aaa);
  //   setMyIndex([...aaa]);
  // };

  return (
    <div>
      {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
      {data?.fetchBoards.map((el: any, index: number) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
