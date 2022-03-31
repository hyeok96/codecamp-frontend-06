import { useState } from "react";

export default function Pagination(props: any) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const onClickPage = (e: any) => {
    props.refetch({ page: Number(e.target.id) });
    setCurrent(Number(e.ta));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastpage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastpage && (
            <span
              key={index + 1}
              onClick={onClickPage}
              id={String(index + 1)}
              current={current}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
