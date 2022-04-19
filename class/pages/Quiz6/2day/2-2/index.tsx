import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

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

function getDate() {
  const newdate = new Date();
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDay();

  return `${yyyy}-${mm}-${dd}`;
}

console.log(new Date());

export default function Quiz() {
  const { data } = useQuery(FETCH_BOARDS);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const MyRow = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const MyColumn = styled.div`
    width: 200px;
  `;

  // const today = new Date();
  const bbb = getDate();

  const [state, setState] = useState([]);

  useEffect(() => {
    const aaa = JSON.parse(localStorage.getItem(bbb) || "[]");
    setState(aaa);
  }, []);

  const onClickBtn = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem(bbb) || "[]");

    const aaa = baskets.filter((basketEl: any) => basketEl._id === el._id);
    if (aaa.length === 1) {
      alert("이미 담김");
      return;
    }
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem(bbb, JSON.stringify(baskets));

    const baskets1 = JSON.parse(localStorage.getItem(bbb) || "[]");
    setState(baskets1);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id} onClick={onClickBtn(el)}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </InnerWrapper>
      <InnerWrapper>
        {state.map((el: IBoard) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
}
