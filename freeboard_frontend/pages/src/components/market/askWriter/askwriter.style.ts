import styled from "@emotion/styled";

export const Main = styled.div`
  width: 1200px;
  margin: 0 auto 0;
`;

export const AskHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 80px auto 0 auto;
  width: 1200px;
  padding-bottom: 40px;
`;

export const AskHeaderIcon = styled.div`
  margin-right: 14px;
  width: 24px;
  height: 24px;
`;

export const AskHeaderText = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

export const AskBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AskBodyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
`;

export const AskBodyInfoRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 52px;
`;

export const AskBodyWriteBox = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;

export const AskBodyWrite = styled.div`
  padding: 20px;
  width: 100%;
  height: 108px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  color: #bdbdbd;
`;

export const AskWriteInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: black;
`;

export const AskBodyWriteSubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
`;

export const AskBodyWriteSubmit = styled.button`
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

export const AskInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  height: 100%;
`;

export const AskInput = styled.input`
  margin-right: 20px;
  padding: 0 4px;
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
`;
