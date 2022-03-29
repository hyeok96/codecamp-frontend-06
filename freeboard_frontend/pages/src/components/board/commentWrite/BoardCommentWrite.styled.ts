import styled from "@emotion/styled";

export const Main = styled.div`
  margin-left: 50px;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;
`;

export const CommentHeaderIcon = styled.div`
  margin-right: 14px;
  width: 24px;
  height: 24px;
`;

export const CommentHeaderText = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentBodyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
`;

export const CommentBodyInfoRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 52px;
`;

export const CommentBodyWriteBox = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;

export const CommentBodyWrite = styled.div`
  padding: 20px;
  width: 100%;
  height: 108px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  color: #bdbdbd;
`;

export const CommentWriteInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export const CommentBodyWriteSubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
`;

export const CommentBodyWriteSubmit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 91px;
  height: 52px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  background: #000000;
  color: #fff;
`;

export const CommentInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  height: 100%;
`;

export const CommentInput = styled.input`
  margin-right: 20px;
  padding: 0 4px;
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
`;