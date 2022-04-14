import styled from "@emotion/styled";

const Btn = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props) {
  return <Btn isActive={props.isActive}>{props.title}</Btn>;
}
