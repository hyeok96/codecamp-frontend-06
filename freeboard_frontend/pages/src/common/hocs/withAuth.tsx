import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { AccessToken, restoreAccessTokenLoadable } from "../store";
import { getAccessToken } from "../utils/getAccessToken";

// @ts-ignore
export const withAuth = (Component) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(AccessToken);
  const restoreAcessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // async function aaa() {
    //   if (!accessToken) {
    //     const newAccessToken = await getAccessToken();
    //     if (!newAccessToken) {
    //       // Modal.error({ content: "로그인 후 이용하세요" });
    //       router.push("/");
    //     }
    //   }
    // }
    // aaa();
    if (!accessToken) {
      restoreAcessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          router.push("/login");
          alert("로그인 후 이용 가능합니다!!!");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
