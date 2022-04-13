import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
export const withAuth = (Component) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용하세요" });
      router.push("/");
    }
  }, []);

  return <Component {...props} />;
};
