import * as s from "./login.style";
import { ILoginPresenterProps } from "./login.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function LoginPresenterPage(props: ILoginPresenterProps) {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(props.schema),
    mode: "onChange",
  });

  return (
    <>
      <form onSubmit={handleSubmit(props.onClickBtn)}>
        <s.Wrapper>
          <s.InnerWrraper>
            <s.Logo></s.Logo>
            <s.InputBox>
              <s.Input type="text" {...register("email")} />
              <s.LoginError>{formState.errors.email?.message}</s.LoginError>
              <s.Input type="password" {...register("password")} />
              <s.LoginError>{formState.errors.password?.message}</s.LoginError>
              <s.LoginBtn isActive={formState.isValid}>로그인하기</s.LoginBtn>
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
      </form>
    </>
  );
}
