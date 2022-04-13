import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
    }
  }
`;

export default function LoginSuccessPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [AccessToken] = useRecoilState(accessTokenState);

  if (data?.fetchUserLoggedIn.email === "") {
    alert("로그인 다시 합시다.");
    router.push("/Quiz5/2day/");
  }

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}</div>
    </>
  );
}
