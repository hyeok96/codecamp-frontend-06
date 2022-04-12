import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "./src/components/common/layout";
import { createUploadLink } from "apollo-upload-client";

import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";

const firebaseConfig = {
  apiKey: "AIzaSyCnQufwMKna4tDIG7b7k49Nq2BftnPfpZw",
  authDomain: "sanghyeok1111-2f42b.firebaseapp.com",
  projectId: "sanghyeok1111-2f42b",
  storageBucket: "sanghyeok1111-2f42b.appspot.com",
  messagingSenderId: "1032604539922",
  appId: "1:1032604539922:web:e54b3460c2225f06644ccb",
};

export const firebaseapp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
