import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import LoginPresenterPage from "./login.presenter";
import { LoginInputState, LoginErrorState } from "../../common/store/index";
import { useRouter } from "next/router";

export default function LoginContainerPage() {
  const router = useRouter();

  const [loingInput, setLoginInput] = useRecoilState(LoginInputState);
  const [_, setLoginError] = useRecoilState(LoginErrorState);

  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loingInput,
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

  const onClickLoginBtn = () => {
    if (loingInput.email !== "") {
      setLoginError((prev) => ({
        ...prev,
        emailerror: "",
      }));
    }

    console.log(loingInput);
    if (loingInput.email === "") {
      setLoginError((prev) => ({
        ...prev,
        emailerror: "이메일 필수입력입니다.",
      }));
    }

    if (loingInput.password === "") {
      setLoginError((prev) => ({
        ...prev,
        passworderror: "비밀번호는 필수입력입니다.",
      }));
    }
    if (loingInput.password !== "") {
      setLoginError((prev) => ({
        ...prev,
        passworderror: "",
      }));
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
