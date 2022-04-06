import * as s from "./LayoutNavication.style";

export default function NavigationPresenter() {
  const name = ["축구순위", "자유 게시판", "중고마켓", "마이 페이지"];

  return (
    <s.Wrapper>
      {name.map((el) => (
        <>
          <s.MenuBox1 key={el}>{el}</s.MenuBox1>;
        </>
      ))}
    </s.Wrapper>
  );
}
