import { useRecoilState } from "recoil";
import SignUpPresenterPage from "./siginUp.presenter";
import { SignUpInputState } from "../../common/store/index";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signUp.Query";
import { Modal } from "antd";
import { IHookFormProps } from "./signUp.types";
import * as yup from "yup";

export default function SignUpContainerPage() {
  const router = useRouter();
  const [signUpInput, setSignUpInput] = useRecoilState(SignUpInputState);

  const [createUser] = useMutation(CREATE_USER);

  const schema = yup.object({
    email: yup
      .string()
      .email("형식을 맞쳐주세요")
      .required("이메일은 필수 입력입니다."),
    password: yup.string().required("비밀번호은 필수 입력입니다."),
    name: yup.string().required("이름은 필수 입력입니다."),
    checkPassword: yup.string().required("비밀번호확인은 필수 입력입니다."),
  });

  const onClickSignUpBtn = async (data: IHookFormProps) => {
    const { checkPassword, ...rest } = data;

    if (rest.password === checkPassword) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...rest,
            },
          },
        });
        console.log(result);
        router.push("/login");
      } catch (error) {
        Modal.error({ content: error.message });
      }
    } else {
      Modal.error({
        content: "비밀번호가 다릅니다.",
      });
    }
  };

  return (
    <SignUpPresenterPage onClickSignUpBtn={onClickSignUpBtn} schema={schema} />
  );
}
