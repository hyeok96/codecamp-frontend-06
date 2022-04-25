import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// apollo-upload-client를 설치 후 createUpliadLink 불러오기
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../../src/commons/store/index";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // uploadLink라는 변수에 createUploadLink를 통해서 백엔드 주소를 uri를 통해서 연결하고

  // 여기는 prerendering시 문제가 된다.
  // const myLoaclStorageAcessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLoaclStorageAcessToken || "");

  // 해결방법1. 더 이상 지원되지 않음
  // if(process.browser) {

  // } else {

  // }

  // 해결방법2
  // if (typeof window !== "undefined") {
  //   console.log("여기는 브라우져다");
  //   const myLoaclStorageAcessToken = localStorage.getItem("accessToken");
  //   setAccessToken(myLoaclStorageAcessToken || "");
  // } else {
  //   console.log("여기는 프론트엔드 서버다");
  // }

  // 해결방법3
  useEffect(() => {
    // const acessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(acessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급받아서 state에 추가하기
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2해당 에러가 토큰 만료인지를 체크(UNAUTHENTICATION)
        if (err.extensions.code === "UNAUTHENTICATION") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2재발급 받은 accessToken
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accesstoken으로 방금 실패한 query 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 3-2변경돤 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    // link를 통해서 ApolloLink의 from을 통해서 변수 uploadLink를 연결해준다.
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
