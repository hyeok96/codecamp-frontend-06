import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "./src/components/commones/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "./src/commons/styles/golbalStyles";
import { initializeApp } from "firebase/app";
// apollo-upload-client를 설치 후 createUpliadLink 불러오기
import { createUploadLink } from "apollo-upload-client";

const firebaseConfig = {
  apiKey: "AIzaSyBV8FHEs7-kVjcM5HAKdlo96kp55jDDemQ",
  authDomain: "leesanghyeok-site.firebaseapp.com",
  projectId: "leesanghyeok-site",
  storageBucket: "leesanghyeok-site.appspot.com",
  messagingSenderId: "330591333014",
  appId: "1:330591333014:web:3c5ccd009784487e9b70b7",
  measurementId: "G-G5NMHP1VTM",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // uploadLink라는 변수에 createUploadLink를 통해서 백엔드 주소를 uri를 통해서 연결하고
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // link를 통해서 ApolloLink의 from을 통해서 변수 uploadLink를 연결해준다.
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
