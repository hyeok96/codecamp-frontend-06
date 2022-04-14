import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  interface IFormValues {
    myWriter?: string;
    myTitle?: string;
    myContents?: string;
  }

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("mySriter")} />
      제목: <input type="text" {...register("myTitle")} />
      {/* data라는 객체 안에 myContents키에 객체가 생기고 그 안에 aaa라는 키값이 생기고 적은 내용이 값으로 들어감 */}
      내용: <input type="text" {...register("myContents.0")} />
      {/* 배열 */}
      내용: <input type="text" {...register("myContents.1")} />
      {/* 배열 */}
      내용: <input type="text" {...register("myContents.aaa")} />
      {/* qoduf */}
      <button>등록하기</button>
    </form>
  );
}
