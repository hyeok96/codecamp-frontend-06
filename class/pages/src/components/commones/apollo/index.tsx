import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// apollo-upload-client를 설치 후 createUpliadLink 불러오기
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../../src/commons/store/index";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

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
    const myLoaclStorageAcessToken = localStorage.getItem("accessToken");
    setAccessToken(myLoaclStorageAcessToken || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    // link를 통해서 ApolloLink의 from을 통해서 변수 uploadLink를 연결해준다.
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
