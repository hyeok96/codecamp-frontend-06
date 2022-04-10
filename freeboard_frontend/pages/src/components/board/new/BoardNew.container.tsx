import { useState, ChangeEvent, useEffect, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import BoardNewPresenter from "./BoardNew.presenter";
import { createBoard, UPDATE_BOARD, UPLOADFILE } from "./BoarderNew.graph";
import { IBoardNewContainerProps } from "./BoardNew.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../common/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function BoardNewContainer(props: IBoardNewContainerProps) {
  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    pw: "",
    title: "",
    text: "",
    address: "",
    adresssDetail: "",
    addressZone: "",
    youtube: "",
  });

  const [images, setImages] = useState([]);
  const [isShowImage, setIsShowImage] = useState(true);

  // const [imgUrl, setImgUrl] = useState<string | undefined>("");

  const [isActive, setIsActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeColor = () => {
    if (
      input.name !== "" &&
      input.pw !== "" &&
      input.text !== "" &&
      input.title
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (props.isEdit === true) {
      if (input.pw !== "") {
        setIsEditActive(true);
      } else {
        setIsEditActive(false);
      }
    }
  };

  const onChangeInput = (e: ChangeEvent<any>) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    onChangeColor();
  }, [input.name, input.pw, input.text, input.title]);

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
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  async function onCilckRegister() {
    if (input.name === "") {
      setErrorName("이름을 적어주세요");
    } else {
      setErrorName("");
    }
    if (input.pw === "") {
      setErrorPw("비밀번호을 적어주세요");
    } else {
      setErrorPw("");
    }
    if (input.title === "") {
      setErrorTitle("제목을 적어주세요");
    } else {
      setErrorTitle("");
    }
    if (input.text === "") {
      setErrorText("내용을 적어주세요");
    } else {
      setErrorText("");
    }
    if (
      input.name !== "" &&
      input.pw !== "" &&
      input.title !== "" &&
      input.text !== ""
    ) {
      try {
        const result = await create({
          variables: {
            createBoardInput: {
              writer: input.name,
              password: input.pw,
              title: input.title,
              contents: input.text,
              youtubeUrl: input.youtube,
              boardAddress: {
                address: input.address,
                addressDetail: input.adresssDetail,
                zipcode: input.addressZone,
              },
              images,
            },
          },
        });

        console.log(result);
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

  const onChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // const isVali = validation(file);
    // if (!isVali) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });

      setImages((prev) => [...prev, result.data.uploadFile.url]);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async () => {
    if (input.pw === "") {
      setErrorPw("비밀번호을 적어주세요");
    } else {
      setErrorPw("");
    }
    if (input.pw !== "") {
      try {
        const myVariables: IMutationUpdateBoardArgs = {
          boardId: String(router.query.id),
          password: input.pw,
          updateBoardInput: {},
        };

        if (input.title !== "")
          myVariables.updateBoardInput.title = input.title;
        if (input.text !== "")
          myVariables.updateBoardInput.contents = input.text;
        if (input.youtube !== "")
          myVariables.updateBoardInput.youtubeUrl = input.youtube;
        if (images !== []) myVariables.updateBoardInput.images = images;
        if (
          input.address !== "" ||
          input.adresssDetail !== "" ||
          input.addressZone !== ""
        )
          myVariables.updateBoardInput.boardAddress = {};
        if (input.address !== "")
          myVariables.updateBoardInput.boardAddress.address = input.address;
        if (input.adresssDetail !== "")
          myVariables.updateBoardInput.boardAddress.addressDetail =
            input.adresssDetail;
        if (input.addressZone !== "")
          myVariables.updateBoardInput.boardAddress.zipcode = input.addressZone;

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
    setInput({
      ...input,
      address: String(data.address),
      addressZone: String(data.zonecode),
    });
  };

  const onClickDeleteImg = (e: MouseEvent<HTMLButtonElement>) => {
    const img = props.data?.fetchBoard.images;
    const newImg = img.filter(
      (el: any) => el !== (e.target as HTMLButtonElement).id
    );
    setImages(newImg);
    setIsShowImage(false);
  };

  // 랜더되는 부분
  return (
    <BoardNewPresenter
      onChangeInput={onChangeInput}
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
      onChangeImg={onChangeImg}
      input={input}
      images={images}
      onClickDeleteImg={onClickDeleteImg}
      isShowImage={isShowImage}
    />
  );
}
