import BannerContainer from "../LayoutBanner/LayoutBanner.container";
import HeaderContiner from "../LayoutHeader/LayoutHeader.container";
import NavigationContainer from "../LayoutNavigation/LayoutNavigation.container";
import { ILayout } from "./layout.tyoes";

export default function Layout(props: ILayout) {
  return (
    <div>
      <HeaderContiner />
      <BannerContainer />
      <NavigationContainer />
      {props.children}
    </div>
  );
}
