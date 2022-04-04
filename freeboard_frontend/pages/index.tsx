import * as s from "./styles";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const meun = [
    { name: "자유게시판", url: "boards" },
    { name: "중고마켓", url: "boards" },
    { name: "마이페이지", url: "boards" },
  ];

  const onClickMove = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <>
      <s.Head>
        <img src="/logo/arsenal2.svg" />
      </s.Head>
      <s.Div>
        <s.ButtonBox>
          {meun.map((el) => (
            <>
              <s.Button onClick={() => onClickMove(el.url)}>{el.name}</s.Button>
            </>
          ))}
        </s.ButtonBox>
      </s.Div>
    </>
  );
}
