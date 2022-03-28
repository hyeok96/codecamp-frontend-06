import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(QuestionCircleOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  return <MyIcon />;
}

// id는 못 쓴다.
// css를 바끄려면 이모션하고 같이 쓰기
