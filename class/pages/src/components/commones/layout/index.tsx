import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutBanner from "./banner";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
`;

const LayoutSideBar = styled.div`
  width: 100px;
  height: 500px;
  background-color: orange;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/12-05-modal-refactoring"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSideBar>사이드바 입니다.</LayoutSideBar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
