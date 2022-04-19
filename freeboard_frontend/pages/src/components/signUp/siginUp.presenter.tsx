import * as s from "./signUp.style";
import { ISigUpPresenterProps } from "./signUp.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUpPresenterPage(props: ISigUpPresenterProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(props.schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(props.onClickSignUpBtn)}>
      <s.Wrapper>
        <s.InnerWrraper>
          <s.Title>회원가입</s.Title>
          <s.InputBox>
            <s.InputTitle>이메일</s.InputTitle>
            <s.Input {...register("email")} />
            <s.SignUpError>{formState.errors.email?.message}</s.SignUpError>
          </s.InputBox>
          <s.InputBox>
            <s.InputTitle>이름</s.InputTitle>
            <s.Input {...register("name")} />
            <s.SignUpError>{formState.errors.name?.message}</s.SignUpError>
          </s.InputBox>
          <s.InputBox>
            <s.InputTitle>비밀번호</s.InputTitle>
            <s.Input type="password" {...register("password")} />
            <s.SignUpError>{formState.errors.password?.message}</s.SignUpError>
          </s.InputBox>
          <s.InputBox>
            <s.InputTitle>비밀번호 확인</s.InputTitle>
            <s.Input type="password" {...register("checkPassword")} />
            <s.SignUpError>
              {formState.errors.checkedPassword?.message}
            </s.SignUpError>
          </s.InputBox>
          <s.SingUpBtn>회원가입하기</s.SingUpBtn>
        </s.InnerWrraper>
      </s.Wrapper>
    </form>
  );
}
