import { atom } from "recoil";

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

export const LoginErrorState = atom({
  key: "LoginErrorState",
  default: {
    emailerror: "",
    nameerror: "",
    passworderror: "",
    checkpassworderror: "",
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
    checkpassword: "",
  },
});
