import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../src/commons/store";

// 토큰 만료시간 5초
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
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

    const accessToken = result.data?.loginUserExample.accessToken;
    setAccessToken(accessToken);
    console.log(accessToken);
    alert("로그인 성공했어요");
    router.push("/30-02-login-success");
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
