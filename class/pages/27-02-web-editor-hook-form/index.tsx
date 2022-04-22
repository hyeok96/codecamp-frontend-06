// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WedEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 값을 넣어 주지 않고 값을 넣어주는 기능
    // 내용ㅇ르 다 지우면 value기 <p><br></p>로 남는다. 그래서 사용
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // contests 부분이 onChange됐는지를 알려주는 기능
    trigger("contents");
  };

  return (
    <div>
      작성자: <input {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input {...register("title")} />
      <br />
      내용:
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
