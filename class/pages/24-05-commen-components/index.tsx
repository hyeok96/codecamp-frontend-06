import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../src/commons/inputs/01";
import Button01 from "../src/commons/buttons/01";

interface IFormValues {
  email?: string;
  password?: string;
}

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

// 아래 schema는 컴포넌트 분릿 .validation.ts라는 파일로 만듬
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(4, "비밀전호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리입니다."),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      이메일: <Input01 type="text" register={register("email")} />
      <Error style={{ color: "red" }}>{formState.errors.email?.message}</Error>
      {/* 비밀번호: <input type="password" {...register("password")} /> */}
      비밀번호:
      <Input01 type="password" register={register("password")} />
      <Error style={{ color: "red" }}>
        {formState.errors.password?.message}
      </Error>
      {/* data라는 객체 안에 myContents키에 객체가 생기고 그 안에 aaa라는 키값이 생기고 적은 내용이 값으로 들어감 */}
      {/* <LoginBtn isActive={formState.isValid}>로그인하기</LoginBtn> */}
      <Button01 title="로그인" isActive={formState.isValid} />
    </form>
  );
}
