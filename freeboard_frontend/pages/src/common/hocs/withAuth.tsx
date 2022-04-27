import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { AccessToken } from "../store";
import { getAccessToken } from "../utils/getAccessToken";

// @ts-ignore
export const withAuth = (Component) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(AccessToken);

  console.log(accessToken);

  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   Modal.error({ content: "로그인 후 이용하세요" });
    //   router.push("/");
    // }
    async function aaa() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          // Modal.error({ content: "로그인 후 이용하세요" });
          router.push("/");
        }
      }
    }
    aaa();
  }, []);

  return <Component {...props} />;
};
