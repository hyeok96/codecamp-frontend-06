import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../src/commons/types/generated/types";

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
export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBaskit = (el) => () => {
    console.log(el);
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 묿품입니다.");
      return;
    }

    // 삭제하기
    // const newB = baskets.filter((basketEl) => basketEl._id !== el._id);

    // 3. 장바구니 담기
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBaskit(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  );
}
