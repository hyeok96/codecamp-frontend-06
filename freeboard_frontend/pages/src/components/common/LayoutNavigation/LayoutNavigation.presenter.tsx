import { useRouter } from "next/router";
import * as s from "./LayoutNavication.style";

export default function NavigationPresenter() {
  const router = useRouter();

  const onClickMovePage = (page: string) => {
    router.push(`/${page}`);
  };

  const name = [
    { name: "홈", router: () => onClickMovePage("/") },
    { name: "축구순위", router: () => onClickMovePage("/MyApi") },
    { name: "지유게시판", router: () => onClickMovePage("/boards") },
    { name: "중고마켓", router: () => onClickMovePage("/boards") },
    { name: "마이 페이지", router: () => onClickMovePage("/boards") },
  ];

  return (
    <s.Wrapper>
      {name.map((el) => (
        <>
          <s.MenuBox1 key={el.name} onClick={el.router}>
            {el.name}
          </s.MenuBox1>
        </>
      ))}
    </s.Wrapper>
  );
}
