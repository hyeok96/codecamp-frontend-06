import FireBasePresenterPage from "./firebase.presenter";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseapp } from "../../../_app";
import { ChangeEvent, useState } from "react";

export default function FireBaseContainerPage() {
  const [contents, setContents] = useState("");

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onCLickRegister = async () => {
    const board = collection(getFirestore(firebaseapp), "board");
    await addDoc(board, {
      contents,
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseapp), "board");
    const result = await getDocs(board);

    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };

  return (
    <FireBasePresenterPage
      onChangeContents={onChangeContents}
      onCLickRegister={onCLickRegister}
      onClickFetch={onClickFetch}
    />
  );
}
