import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onCLickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    console.log(accessToken);
    alert("로그인 성공했어요");
    router.push("/23-05-login-check-success");
  };

  return (
    <>
      <div>
        이메일: <input onChange={onChangeEmail} />
        <br />
        비밀번호 : <input type="password" onChange={onChangePassword} />
        <button onClick={onCLickLogin}>로그ㄹ인하기</button>
      </div>
    </>
  );
}
