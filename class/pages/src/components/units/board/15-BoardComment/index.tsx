import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props: any) {
  const [isEidt, setIsEidt] = useState(false);

  const onClickEidt = () => {
    setIsEidt(true);
  };

  return (
    <div>
      {isEidt === false && (
        <MyRow>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{props.el._id}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button id={String(props.index)} onClick={onClickEidt}>
            수정
          </button>
        </MyRow>
      )}
      {isEidt === true && <div>수정하기 화면입니다.</div>}
    </div>
  );
}
