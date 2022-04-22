import HeaderPresenter from "./LayoutHeader.presenter";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.Query";

export default function HeaderContiner() {
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  const onClickMoveHome = () => {
    router.push("/");
  };

  const onClickShowProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <HeaderPresenter
      onClickMoveHome={onClickMoveHome}
      data={data}
      showProfile={showProfile}
      onClickShowProfile={onClickShowProfile}
    />
  );
}
