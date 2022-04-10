import styled from "@emotion/styled";
import { IPagination } from "./navigation.types";

export const Div = styled.div`
  margin: auto;
  padding-bottom: 40px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const Span = styled.div`
  color: ${(props: IPagination) =>
    Number(props.id) === props.current ? "#c92a1f" : "gray"};
  font-size: medium;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Btn1 = styled.button`
  width: 48px;
  height: 48px;
`;

export const Btn2 = styled.button`
  width: 48px;
  height: 48px;
`;
