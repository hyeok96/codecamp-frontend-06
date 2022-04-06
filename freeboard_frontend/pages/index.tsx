import * as s from "./styles";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const router = useRouter();

  const meun = [
    { name: "축구순위", url: "MyApi" },
    { name: "자유게시판", url: "boards" },
    { name: "중고마켓", url: "boards" },
    { name: "마이페이지", url: "boards" },
  ];

  const onClickMove = (page: string) => {
    router.push(`/${page}`);
  };

  const imgRef = useRef(null);
  const textRef = useRef(null);
  const smallTextRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const animation = async () => {
      await gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      await gsap.fromTo(
        smallTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      await gsap.fromTo(
        imgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      await gsap.fromTo(
        btnRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    };

    animation();
  });

  return (
    <>
      <s.Body>
        <s.Text ref={textRef}>Arsenal F.C.</s.Text>
        <s.SmallText ref={smallTextRef}>
          They called themselves Dial Square as a reference to the sundial atop
          the entrance to the factory. On December 11, 1886, Dial Square romped
          to a 6-0 victory over Eastern Wanderers; the first game in their
          initial guise. Shortly afterwards the name ‘Royal Arsenal’ was
          adopted. A group of players from Nottingham Forest joined the Club and
          this connection with the future European Cup winners would spawn
          Arsenal’s famous red shirts. The group approached their former club,
          who had been formed some 20 years earlier, for spare kit. Forest duly
          obliged and Arsenal, dipped in red, never looked back.
        </s.SmallText>
      </s.Body>
      <s.Head>
        <s.Logo src="/logo/arsenal2.svg" ref={imgRef} />
      </s.Head>
      <s.Div>
        <s.ButtonBox ref={btnRef}>
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
