import "antd/dist/antd.css";
import Head from "next/head";
// import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "./src/components/commones/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "./src/commons/styles/golbalStyles";
import { initializeApp } from "firebase/app";

import { RecoilRoot } from "recoil";

import ApolloSetting from "./src/components/commones/apollo";

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
  return (
    <>
      {/*  자동은 가능하나 별로 안 좋다. 모든 페이지에서 맵을 다운 받아서 비효율적 */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c45b57c60e36a494c3491eb508bb9172"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
