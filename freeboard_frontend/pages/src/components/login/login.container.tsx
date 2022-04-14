import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import LoginPresenterPage from "./login.presenter";
import {
  LoginInputState,
  LoginErrorState,
  AccessToken,
} from "../../common/store/index";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.query";
import { Modal } from "antd";

export default function LoginContainerPage() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [loginInput, setLoginInput] = useRecoilState(LoginInputState);
  const [, setLoginError] = useRecoilState(LoginErrorState);
  const [, setAccessToken] = useRecoilState(AccessToken);

  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "email" && !/^\w+@\w+\.\w+/.test(e.target.value)) {
      setLoginError((prev) => ({
        ...prev,
        emailerror: "이메일 형식을 확인하세요",
      }));
    }
    if (e.target.name === "email" && /^\w+@\w+\.\w+/.test(e.target.value)) {
      setLoginError((prev) => ({
        ...prev,
        emailerror: "",
      }));
    }
  };

  const onClickLoginBtn = async () => {
    if (loginInput.email !== "") {
      setLoginError((prev) => ({
        ...prev,
        emailerror: "",
      }));
    }

    console.log(loginInput);
    if (loginInput.email === "") {
      setLoginError((prev) => ({
        ...prev,
        emailerror: "이메일 필수입력입니다.",
      }));
    }

    if (loginInput.password === "") {
      setLoginError((prev) => ({
        ...prev,
        passworderror: "비밀번호는 필수입력입니다.",
      }));
    }
    if (loginInput.password !== "") {
      setLoginError((prev) => ({
        ...prev,
        passworderror: "",
      }));
    }

    if (loginInput.password !== "" && loginInput.email !== "") {
      try {
        const result = await loginUser({
          variables: {
            ...loginInput,
          },
        });
        console.log(result);
        const loginToken = result.data.loginUser.accessToken;
        console.log(loginToken);
        setAccessToken(loginToken);
        localStorage.setItem("accessToken", loginToken);

        router.push("/boards");
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickMoveSignUpPage = () => {
    router.push("/signUp");
  };

  return (
    <LoginPresenterPage
      onChangeLoginInput={onChangeLoginInput}
      onClickLoginBtn={onClickLoginBtn}
      onClickMoveSignUpPage={onClickMoveSignUpPage}
    />
  );
}
