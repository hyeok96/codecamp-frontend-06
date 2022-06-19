import styled from "@emotion/styled";
import { ILoginStyleProps } from "./login.types";

export const Wrapper = styled.div`
  padding-top: 240px;
  width: 100%;
  height: 100vh;
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

export const Logo = styled.div`
  /* margin-bottom: 80px;
  width: 100%;
  height: 45px;
  background-color: aqua; */
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid white;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 384px;
  height: 64px;
  background: white;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px;
`;

export const LoginState = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const LoginStateIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: aqua;
`;

export const LoginStateText = styled.div`
  width: 111px;
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const LoginBtn = styled.button`
  width: 384px;
  height: 64px;
  background: #4f4f4f;
  border-radius: 16px;
  background-color: ${(props: ILoginStyleProps) =>
    props.isActive ? "#0d1c4a" : "none"};
  color: ${(props: ILoginStyleProps) => (props.isActive ? "white" : "none")};
`;

export const LoginSubBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 384px;
  height: 64px;
`;

export const LoginSubBtn = styled.div`
  width: 100px;
  height: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: white;
`;

export const LoginError = styled.div`
  width: 160px;
  height: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
`;
