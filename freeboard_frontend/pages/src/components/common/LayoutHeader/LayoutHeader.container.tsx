import HeaderPresenter from "./LayoutHeader.presenter";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.Query";

export default function HeaderContiner() {
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickMoveHome = () => {
    router.push("/");
  };

  const onClickShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const onClickLogout = async () => {
    await logoutUser();
    location.reload();
    router.push("/");
  };

  return (
    <HeaderPresenter
      onClickMoveHome={onClickMoveHome}
      data={data}
      showProfile={showProfile}
      onClickShowProfile={onClickShowProfile}
      onClickLogout={onClickLogout}
    />
  );
}
