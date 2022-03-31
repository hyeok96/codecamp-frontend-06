import { useState, MouseEvent } from "react";
import * as s from "./Navigation.style";
import { INavigationPros } from "../../board/list/BoardList.types";

export default function NavigationPage(props: INavigationPros) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const onClickPage = (e: MouseEvent<HTMLDivElement>) => {
    props.refetch({ page: Number((e.target as HTMLDivElement).id) });
    setCurrent(Number((e.target as HTMLDivElement).id));
  };

  const onClickPageNext = () => {
    if (startPage + 5 > props.lastPage) {
      return;
    }
    setStartPage((prev) => prev + 5);
    props.refetch({ page: startPage + 5 });
  };

  const onClickPagePrev = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 5);
    props.refetch({ page: startPage - 5 });
  };

  return (
    <div>
      <s.Div>
        <s.Btn1 onClick={onClickPagePrev} disabled={startPage === 1 && true}>
          <img src="/list/prev.png" />
        </s.Btn1>
        {new Array(5).fill(1).map(
          (_, index) =>
            index + startPage <= props.lastPage && (
              <>
                <s.Span
                  onClick={onClickPage}
                  id={String(index + 1)}
                  current={Number(current)}
                >
                  {startPage + index}
                </s.Span>
              </>
            )
        )}

        <s.Btn2
          onClick={onClickPageNext}
          disabled={startPage + 5 > props.lastPage === true}
        >
          <img src="/list/next.png" />
        </s.Btn2>
      </s.Div>
    </div>
  );
}