import styled from "@emotion/styled";
import { IPagination } from "./navigation.types";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Span = styled.span`
  color: ${(props: IPagination) =>
    Number(props.id) === props.current ? "yellow" : "gray"};
  font-size: medium;
  margin: 0 10px;
  width: 48px;
`;

export const Btn1 = styled.div`
  font-size: medium;
`;

export const Btn2 = styled.div`
  font-size: medium;
`;
