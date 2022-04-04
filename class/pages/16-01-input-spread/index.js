import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, contents: $contents, title: $title) {
      message
    }
  }
`;

export default function CraphqlMutationPage() {
  const [callApi] = useMutation(CREATE_BOARD);

  //    const [myWriter, setMyWrite] = useState("")
  //    const [myTitle, setMyTitle] = useState("")
  //    const [myContent, setMyContent] = useState("")

  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
    const result = await callApi({
      variables: {
        // writer: input.writer,
        // title: input.title,
        // contents: input.contents,
        ...input,
      },
    }); // graph-api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  const onChangeInput = (e) => {
    setInput({
      //   writer: e.target.value,
      //   title: input.title,
      //   contents: input.contents,
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  //   const onChangeTitle = (e) => {
  //     setInput({
  //       //   writer: input.writer,
  //       //   title: e.target.value,
  //       //   contents: input.contents,
  //       ...input,
  //       [e.target.id]: e.target.value,
  //     });
  //   };

  //   const onChangeCOntent = (e) => {
  //     setInput({
  //       //   writer: input.writer,
  //       //   title: input.title,
  //       //   contents: e.target.value,
  //       ...input,
  //       [e.target.id]: e.target.value,
  //     });
  //   };
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input onChange={onChangeInput} id="writer" />
      제목: <input onChange={onChangeInput} id="title" />
      내용: <input onChange={onChangeInput} id="contents" />
      <button onClick={callGraphqlApi}>graphql-api 요청하기</button>
    </div>
  );
}
