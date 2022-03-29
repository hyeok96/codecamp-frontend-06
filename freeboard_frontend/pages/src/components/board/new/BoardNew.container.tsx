import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardNewPresenter from "./BoardNew.presenter";
import { createBoard, UPDATE_BOARD } from "./BoarderNew.graph";
import { IBoardNewContainerProps } from "./BoardNew.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../common/types/generated/types";
import { Modal } from "antd";

export default function BoardNewContainer(props: IBoardNewContainerProps) {
  const router = useRouter();

  // state
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [addressZone, setAdressZone] = useState("");
  const [youtube, setYoutube] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 에러 state
  const [errorName, setErrorName] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorText, setErrorText] = useState("");

  const [create] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(createBoard);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);

    if (e.target.value !== "" && pw !== "" && title !== "" && text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePw(e: ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);

    if (name !== "" && e.target.value !== "" && title !== "" && text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (props.isEdit === true) {
      if (e.target.value !== "") {
        setIsEditActive(true);
      } else {
        setIsEditActive(false);
      }
    }
  }

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);

    // if(name !== "" && pw !== "" && e.target.value !== "" && text !== "")
    if (name && pw && e.target.value && text) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeText(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);

    if (pw !== "" && title !== "" && e.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  function onChangeYoutube(e: ChangeEvent<HTMLInputElement>) {
    setYoutube(e.target.value);
  }

  async function onCilckRegister() {
    if (name === "") {
      setErrorName("이름을 적어주세요");
    } else {
      setErrorName("");
    }
    if (pw === "") {
      setErrorPw("비밀번호을 적어주세요");
    } else {
      setErrorPw("");
    }
    if (title === "") {
      setErrorTitle("제목을 적어주세요");
    } else {
      setErrorTitle("");
    }
    if (text === "") {
      setErrorText("내용을 적어주세요");
    } else {
      setErrorText("");
    }
    if (name !== "" && pw !== "" && title !== "" && text !== "") {
      try {
        const result = await create({
          variables: {
            createBoardInput: {
              writer: name,
              password: pw,
              title: title,
              contents: text,
              youtubeUrl: youtube,
              boardAddress: {
                address: address,
              },
              images: [],
            },
          },
        });
        Modal.success({
          content: "게시글이 등록되었습니다.",
        });

        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({
          content: `${error.message}`,
        });
      }
    }
  }

  const onClickUpdate = async () => {
    if (pw === "") {
      setErrorPw("비밀번호을 적어주세요");
    } else {
      setErrorPw("");
    }
    if (pw !== "") {
      try {
        const myVariables: IMutationUpdateBoardArgs = {
          boardId: String(router.query.id),
          password: pw,
          updateBoardInput: {},
        };

        if (title !== "") myVariables.updateBoardInput.title = title;
        if (text !== "") myVariables.updateBoardInput.contents = text;
        if (youtube !== "") myVariables.updateBoardInput.youtubeUrl = youtube;

        await updateBoard({
          variables: myVariables,
        });

        Modal.success({
          content: "게시글이 수정되었습니다.",
        });

        router.push(`/boards/${router.query.id}`);
      } catch (error) {
        Modal.error({
          content: `${error.message}`,
        });
      }
    }
  };

  const showModal = () => {
    setIsOpen(!isOpen);
  };

  const onClickAddressModal = () => {
    showModal();
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setIsOpen(!isOpen);
    setAddress(String(data.address));
    setAdressZone(String(data.zonecode));
  };

  // 랜더되는 부분
  return (
    <BoardNewPresenter
      onChangeName={onChangeName}
      onChangePw={onChangePw}
      onChangeTitle={onChangeTitle}
      onChangeText={onChangeText}
      onChangeAddress={onChangeAddress}
      onChangeYoutube={onChangeYoutube}
      onCilckRegister={onCilckRegister}
      errorName={errorName}
      errorPw={errorPw}
      errorTitle={errorTitle}
      errorText={errorText}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
      isEditActive={isEditActive}
      isActive={isActive}
      showModal={showModal}
      onClickAddressModal={onClickAddressModal}
      isOpen={isOpen}
      handleComplete={handleComplete}
      address={address}
      addressZone={addressZone}
    />
  );
}
