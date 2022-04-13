import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용하세요");
      router.push("/Quiz5/3day/withAuth");
    }
  });

  return <Component {...props} />;
};
