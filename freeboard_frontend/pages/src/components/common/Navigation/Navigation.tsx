import { useState, MouseEvent, Fragment } from "react";
import * as s from "./Navigation.style";
import { INavigationPros } from "../../board/list/BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function NavigationPage(props: INavigationPros) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const onClickPage = (e: MouseEvent<HTMLDivElement>) => {
    props.refetch({
      page: Number((e.target as HTMLDivElement).id),
    });
    setCurrent(Number((e.target as HTMLDivElement).id));
  };

  const onClickPageNext = () => {
    if (startPage + 5 > props.lastPage) {
      return;
    }
    setStartPage((prev) => prev + 5);
    props.refetch({ page: startPage + 5 });
    setCurrent(startPage + 5);
  };

  const onClickPagePrev = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 5);
    props.refetch({ page: startPage - 5 });
    setCurrent(startPage - 5);
  };

  return (
    <s.Div>
      <s.Btn1 onClick={onClickPagePrev} disabled={startPage === 1 && true}>
        <img src="/list/prev.png" />
      </s.Btn1>
      {new Array(5).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <Fragment key={index + startPage}>
              <s.Span
                onClick={onClickPage}
                id={String(index + startPage)}
                current={Number(current)}
                // key={index + startPage}
              >
                {startPage + index}
              </s.Span>
            </Fragment>
          )
      )}

      <s.Btn2
        onClick={onClickPageNext}
        disabled={startPage + 5 > props.lastPage === true}
      >
        <img src="/list/next.png" />
      </s.Btn2>
    </s.Div>
  );
}
