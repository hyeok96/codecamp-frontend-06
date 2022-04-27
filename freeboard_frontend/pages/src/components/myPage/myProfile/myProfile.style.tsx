import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 50px;
  width: 100%;
`;

export const Title = styled.div`
  padding-bottom: 40px;
  height: 36px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const InputTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 14px 16px;
  width: 690px;
  height: 52px;
  background: #e0e0e0;
  color: black;
  opacity: 0.3;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  border: none;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  background: #bdbdbd;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  border: none;
`;
