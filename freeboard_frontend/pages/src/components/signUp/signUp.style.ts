import styled from "@emotion/styled";
import { IStyleProps } from "./signUp.types";

export const Wrapper = styled.div`
  padding-top: 240px;
  width: 100%;
  height: 100%;
  background-color: #c92a1f;
`;

export const InnerWrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 384px;
  margin: auto;
`;

export const Title = styled.div`
  margin-bottom: 80px;
  width: 100%;
  height: 45px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const InputTitle = styled.div`
  margin-bottom: 12px;
  width: 100px;
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px;
`;

export const SingUpBtn = styled.button`
  width: 384px;
  height: 64px;
  background: #4f4f4f;
  border-radius: 16px;
  background-color: ${(props: IStyleProps) =>
    props.isActive ? "#0d1c4a" : "none"};
  color: ${(props: IStyleProps) => (props.isActive ? "white" : "none")};
`;

export const SignUpError = styled.div`
  width: 160px;
  height: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
`;
