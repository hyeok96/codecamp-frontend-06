// import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../src/commons/store";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { withAuth } from "../src/components/commones/hocs/withAuth";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       name
//       email
//     }
//   }
// `;

function LoginSuccessPage() {
  // const router = useRouter();

  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userInfo] = useRecoilState(userInfoState);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{userInfo.name}님 환영해요!!</div>;
}

export default withAuth(LoginSuccessPage);
