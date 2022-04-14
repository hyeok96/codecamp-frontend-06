import styled from "@emotion/styled";

interface IProps {
  title?: string;
  isActive: true;
}

const Btn = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "none")};
`;

export default function Button01(props: IProps) {
  return <Btn isActive={props.isActive}>{props.title}</Btn>;
}
