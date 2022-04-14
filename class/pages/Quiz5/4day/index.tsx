import { useForm } from "react-hook-form";
import Button01 from "../../src/commons/buttons/01";
import Input01 from "./input01";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const Div = styled.div`
  font-size: 12px;
  color: red;
`;

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "5지이내로 적어주세요")
    .required("필수 입력값입니다."),
  password: yup
    .string()
    .max(8, "8자리 이하로 입력해 주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
      "조건에 맞지 않습니다."
    )
    .required("필수 입력값입니다."),
  title: yup
    .string()
    .max(100, "100자 이내로 적어주세요")
    .required("필수입력값입니다."),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 적어주세요")
    .required("필수입력값입니다."),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickBtn = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickBtn)}>
      작성자: <Input01 register={register("writer")} type="text" />
      <Div>{formState.errors.writer?.message}</Div>
      비밀번호: <Input01 register={register("password")} type="password" />
      <Div>{formState.errors.password?.message}</Div>
      제목: <Input01 register={register("title")} type="text" />
      <Div>{formState.errors.title?.message}</Div>
      내용: <Input01 register={register("contents")} type="text" />
      <Div>{formState.errors.contents?.message}</Div>
      <Button01 title="로그인하기" isActive={formState.isValid} />
    </form>
  );
}
