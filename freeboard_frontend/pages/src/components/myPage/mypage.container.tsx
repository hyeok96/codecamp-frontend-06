import { useState } from "react";
import MyPagePresenter from "./mypage.presenter";

export default function MyPageContainer() {
  const [isShowProfile, setIsShowProfile] = useState(false);

  const onClickShowProfile = () => {
    setIsShowProfile(true);
  };

  return (
    <MyPagePresenter
      isShowProfile={isShowProfile}
      onClickShowProfile={onClickShowProfile}
    />
  );
}
