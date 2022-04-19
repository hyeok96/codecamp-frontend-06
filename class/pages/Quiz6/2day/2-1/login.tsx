import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

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
    console.log(accessToken);
    const aaa = JSON.parse(localStorage.getItem("baskets") || "[]");
    if (aaa.length >= 1) {
      alert("비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?");
      router.push("/Quiz6/2day/2-1/list");
      return;
    }
    router.push("/22-02-login-success");
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
