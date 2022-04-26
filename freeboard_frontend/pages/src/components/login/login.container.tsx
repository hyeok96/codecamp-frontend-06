import { useRecoilState } from "recoil";
import LoginPresenterPage from "./login.presenter";
import { LoginInputState, AccessToken } from "../../common/store/index";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.query";
import { Modal } from "antd";
import { IHookFormProps } from "./login.types";
import * as yup from "yup";

export default function LoginContainerPage() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [loginInput, setLoginInput] = useRecoilState(LoginInputState);
  const [, setAccessToken] = useRecoilState(AccessToken);

  const schema = yup.object({
    email: yup
      .string()
      .email("형식을 맞쳐주세요")
      .required("이메일은 필수 입력입니다."),
    password: yup.string().required("비밀번호은 필수 입력입니다."),
  });

  const onClickMoveSignUpPage = () => {
    router.push("/signUp");
  };

  const onClickBtn = async (data: IHookFormProps) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      console.log(result);
      const loginToken = result.data.loginUser.accessToken;
      console.log(loginToken);
      setAccessToken(loginToken);
      // localStorage.setItem("accessToken", loginToken);

      router.push("/boards");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPresenterPage
      onClickMoveSignUpPage={onClickMoveSignUpPage}
      onClickBtn={onClickBtn}
      schema={schema}
    />
  );
}
