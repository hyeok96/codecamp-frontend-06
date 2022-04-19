import { atom } from "recoil";
import { IQuery } from "../types/generated/types";

export const ProductInputState = atom({
  key: "ProductInputState",
  default: {
    name: "",
    remarks: "",
    contents: "",
    price: 0,
    tags: [],
    useditemAddress: {
      zipcode: "",
      address: "",
      addressDetail: "",
    },
    images: [],
  },
});

export const LoginInputState = atom({
  key: "LoginInputState",
  default: {
    email: "",
    password: "",
  },
});

export const ActiveBtnState = atom({
  key: "ActiveBtnState",
  default: false,
});

export const SignUpInputState = atom({
  key: "SignUpInputState",
  default: {
    email: "",
    name: "",
    password: "",
  },
});

export const AccessToken = atom({
  key: "AccessToken",
  default: "",
});

export const PrevPageState = atom({
  key: "PrevPageState",
  default: "",
});
