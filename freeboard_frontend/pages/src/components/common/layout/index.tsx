import { useRouter } from "next/router";
import BannerContainer from "../LayoutBanner/LayoutBanner.container";
import HeaderContiner from "../LayoutHeader/LayoutHeader.container";
import NavigationContainer from "../LayoutNavigation/LayoutNavigation.container";
import { ILayout } from "./layout.tyoes";

export default function Layout(props: ILayout) {
  const router = useRouter();
  const HIDDEN_LAYOUT = ["/", "/login", "/signUp"];

  const isHidden = HIDDEN_LAYOUT.includes(router.asPath);
  return (
    <div>
      {!isHidden && <HeaderContiner />}
      {!isHidden && <BannerContainer />}
      {!isHidden && <NavigationContainer />}
      {props.children}
    </div>
  );
}
