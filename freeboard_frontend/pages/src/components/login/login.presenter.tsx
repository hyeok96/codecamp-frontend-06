import * as s from "./login.style";
import { ILoginPresenterProps } from "./login.types";
import { LoginErrorState } from "../../common/store/index";
import { useRecoilState } from "recoil";

export default function LoginPresenterPage(props: ILoginPresenterProps) {
  const [loginError] = useRecoilState(LoginErrorState);

  return (
    <>
      <s.Wrapper>
        <s.InnerWrraper>
          <s.Logo></s.Logo>
          <s.InputBox>
            <s.Input
              placeholder="이메일를 입력하세요"
              name="email"
              onChange={props.onChangeLoginInput}
            />
            <s.LoginError>{loginError.emailerror}</s.LoginError>
            <s.Input
              placeholder="비밀번호를 입력하세요"
              type="password"
              name="password"
              onChange={props.onChangeLoginInput}
            />
            <s.LoginError>{loginError.passworderror}</s.LoginError>
            <s.LoginState>
              <s.LoginStateIcon></s.LoginStateIcon>
              <s.LoginStateText>로그인 상태 유지</s.LoginStateText>
            </s.LoginState>
            <s.LoginBtn onClick={props.onClickLoginBtn}>로그인하기</s.LoginBtn>
          </s.InputBox>
          <s.LoginSubBox>
            <s.LoginSubBtn>아이디 찾기</s.LoginSubBtn>
            <s.LoginSubBtn>비밀번호 찾기</s.LoginSubBtn>
            <s.LoginSubBtn onClick={props.onClickMoveSignUpPage}>
              회원가입
            </s.LoginSubBtn>
          </s.LoginSubBox>
        </s.InnerWrraper>
      </s.Wrapper>
    </>
  );
}
