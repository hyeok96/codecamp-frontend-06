import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { IApolloProps } from "./apollo.type";
import { AccessToken } from "../store/index";
import { useEffect } from "react";

export default function ApolloPage(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);

  useEffect(() => {
    const loginToken = localStorage.getItem("accessToken");
    setAccessToken(loginToken || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
