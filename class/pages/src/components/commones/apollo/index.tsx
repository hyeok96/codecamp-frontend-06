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

export default function ApolloSetting(props: any) {
  const [accessToken] = useRecoilState(accessTokenState);
  // uploadLink라는 변수에 createUploadLink를 통해서 백엔드 주소를 uri를 통해서 연결하고
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
