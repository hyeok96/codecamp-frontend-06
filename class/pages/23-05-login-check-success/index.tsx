import { gql, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { withAuth } from "../src/components/commones/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  console.log(data);

  return <div>{data?.fetchUserLoggedIn.name}님 환영해요!!</div>;
}

export default withAuth(LoginSuccessPage);
