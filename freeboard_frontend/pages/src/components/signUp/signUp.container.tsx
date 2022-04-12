import { useRecoilState } from "recoil";
import SignUpPresenterPage from "./siginUp.presenter";
import { SignUpInputState, LoginErrorState } from "../../common/store/index";
import { ChangeEvent } from "react";

export default function SignUpContainerPage() {
  const [signUpInput, setSignUpInput] = useRecoilState(SignUpInputState);
  const [error, setError] = useRecoilState(LoginErrorState);

  const onChangeSingUpInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "email" && !/^\w+@\w+\.\w+/.test(e.target.value)) {
      setError((prev) => ({
        ...prev,
        emailerror: "이메일 형식을 확인하세요",
      }));
    }
    if (e.target.name === "email" && /^\w+@\w+\.\w+/.test(e.target.value)) {
      setError((prev) => ({
        ...prev,
        emailerror: "",
      }));
    }
  };

  const onClickSignUpBtn = () => {
    if (signUpInput.email === "") {
      setError((prev) => ({
        ...prev,
        emailerror: "필수 값입니다.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        emailerror: "",
      }));
    }

    if (signUpInput.name === "") {
      setError((prev) => ({
        ...prev,
        nameerror: "필수 값입니다.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        nameerror: "",
      }));
    }

    if (signUpInput.password === "") {
      setError((prev) => ({
        ...prev,
        passworderror: "필수 값입니다.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        passworderror: "",
      }));
    }

    if (signUpInput.checkpassword === "") {
      setError((prev) => ({
        ...prev,
        checkpassworderror: "필수 값입니다.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        checkpassworderror: "",
      }));
    }
  };

  return (
    <SignUpPresenterPage
      onChangeSingUpInput={onChangeSingUpInput}
      onClickSignUpBtn={onClickSignUpBtn}
    />
  );
}
