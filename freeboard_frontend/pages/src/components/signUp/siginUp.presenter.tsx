import * as s from "./signUp.style";
import { ISigUpPresenterProps } from "./signUp.types";
import { LoginErrorState } from "../../common/store/index";
import { useRecoilState } from "recoil";

export default function SignUpPresenterPage(props: ISigUpPresenterProps) {
  const [error] = useRecoilState(LoginErrorState);

  return (
    <>
      <s.Wrapper>
        <s.InnerWrraper>
          <s.Title>회원가입</s.Title>
          <s.InputBox>
            <s.InputTitle>이메일</s.InputTitle>
            <s.Input
              placeholder="이메일을 입력하세요"
              name="email"
              onChange={props.onChangeSingUpInput}
            />
            <s.SignUpError>{error.emailerror}</s.SignUpError>
          </s.InputBox>
          <s.InputBox>
            <s.InputTitle>이름</s.InputTitle>
            <s.Input
              placeholder="이름을 입력하세요"
              name="name"
              onChange={props.onChangeSingUpInput}
            />
            <s.SignUpError>{error.nameerror}</s.SignUpError>
          </s.InputBox>
          <s.InputBox>
            <s.InputTitle>비밀번호</s.InputTitle>
            <s.Input
              placeholder="비밀번호을 입력하세요"
              name="password"
              onChange={props.onChangeSingUpInput}
            />
            <s.SignUpError>{error.passworderror}</s.SignUpError>
          </s.InputBox>
          <s.InputBox>
            <s.InputTitle>비밀번호 확인</s.InputTitle>
            <s.Input
              placeholder="비밀번호을 입력하세요"
              name="checkpassword"
              onChange={props.onChangeCheckedPw}
            />
            <s.SignUpError>{error.checkpassworderror}</s.SignUpError>
          </s.InputBox>
          <s.SingUpBtn onClick={props.onClickSignUpBtn}>
            회원가입하기
          </s.SingUpBtn>
        </s.InnerWrraper>
      </s.Wrapper>
    </>
  );
}
