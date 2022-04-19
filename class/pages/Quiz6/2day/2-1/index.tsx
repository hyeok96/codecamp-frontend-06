import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";

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

export default function Quiz() {
  const { data } = useQuery(FETCH_BOARDS);

  const MyRow = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const MyColumn = styled.div`
    width: 25%;
  `;

  const onClickBtn = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const aaa = baskets.filter((basketEl) => basketEl._id === el._id);
    if (aaa.length === 1) {
      alert("이미 담김");
      return;
    }
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickBaskit = (el) => () => {
    console.log(el);
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl) => basketEl._id !== el._id);
    localStorage.setItem("baskets", JSON.stringify(temp));
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBtn(el)}>게시물 담기</button>
          <button onClick={onClickBaskit(el)}>삭제</button>
        </MyRow>
      ))}
    </>
  );
}
