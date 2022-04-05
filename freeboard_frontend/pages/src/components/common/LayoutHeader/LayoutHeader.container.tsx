import HeaderPresenter from "./LayoutHeader.presenter";
import React from "react";
import { useRouter } from "next/router";

export default function HeaderContiner() {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/");
  };

  return <HeaderPresenter onClickMoveHome={onClickMoveHome} />;
}
