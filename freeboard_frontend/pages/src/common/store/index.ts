import { atom, selector } from "recoil";
import { getAccessToken } from "../utils/getAccessToken";

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

export const QuestionState = atom({
  key: "QuestionState",
  default: false,
});

export const RecommendUpdate = atom({
  key: "RecommendUpdate",
  default: false,
});

export const FetchAddress = atom({
  key: "FetchAddress",
  default: {
    getLat: 0,
    getLng: 0,
  },
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
