import { useRecoilState } from "recoil";
import SignUpPresenterPage from "./siginUp.presenter";
import { SignUpInputState, LoginErrorState } from "../../common/store/index";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signUp.Query";
import { Modal } from "antd";

export default function SignUpContainerPage() {
  const router = useRouter();

  const [signUpInput, setSignUpInput] = useRecoilState(SignUpInputState);
  const [error, setError] = useRecoilState(LoginErrorState);
  const [checkedPw, setCheckedPw] = useState("");

  const [createUser] = useMutation(CREATE_USER);

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

  const onChangeCheckedPw = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedPw(e.target.value);
  };

  const onClickSignUpBtn = async () => {
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

    if (checkedPw === "") {
      setError((prev) => ({
        ...prev,
        checkpassworderror: "필수 값입니다.",
      }));
    } else {
      if (signUpInput.password !== checkedPw) {
        setError((prev) => ({
          ...prev,
          checkpassworderror: "비밀번호가 다릅니다.",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          checkpassworderror: "",
        }));
      }
    }

    if (
      signUpInput.email !== "" &&
      signUpInput.name !== "" &&
      signUpInput.password !== "" &&
      checkedPw !== ""
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...signUpInput,
            },
          },
        });
        console.log(result);
        router.push("/login");
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <SignUpPresenterPage
      onChangeSingUpInput={onChangeSingUpInput}
      onClickSignUpBtn={onClickSignUpBtn}
      onChangeCheckedPw={onChangeCheckedPw}
    />
  );
}
