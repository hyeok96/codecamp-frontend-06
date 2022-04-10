import BoardListPresenter from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.graph";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../common/types/generated/types";
import NavigationPage from "../../common/Navigation/Navigation";
import BoardListPage from "../../common/BoardList/BoardList.presenter";
import _ from "lodash";

export default function BoardListConatiner() {
  const router = useRouter();

  const [mySearch, setMySearch] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: bestBoardData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const { data: countData, refetch: countRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(countData?.fetchBoardsCount / 10);

  const onClickDetailPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(e.currentTarget as HTMLDivElement).id}`);
  };

  const onClickBoardNewPage = () => {
    router.push(`/boards/new`);
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value });
    countRefetch({ search: value });
    setMySearch(value);
  }, 200);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const onClickSearchBoard = () => {
    const searchBoards: IQueryFetchBoardsArgs = {};

    if (startDate !== "") searchBoards.startDate = new Date(startDate);
    if (endDate !== "") searchBoards.endDate = new Date(endDate);
    const searchBoardCount: IQueryFetchBoardsCountArgs = {};

    if (startDate !== "" || startDate === "")
      searchBoardCount.startDate = new Date(startDate);
    if (endDate !== "" || startDate === "")
      searchBoardCount.endDate = new Date(endDate);

    refetch(searchBoards);
    countRefetch(searchBoardCount);
  };

  const onClickMoveBestPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(e.currentTarget as HTMLDivElement).id}`);
  };

  console.log(bestBoardData);

  return (
    <>
      <BoardListPresenter
        bestBoardData={bestBoardData}
        onClickBoardNewPage={onClickBoardNewPage}
        onChangeSearch={onChangeSearch}
        onClickSearchBoard={onClickSearchBoard}
        onClickMoveBestPage={onClickMoveBestPage}
        onChangeStartDate={onChangeStartDate}
        onChangeEndDate={onChangeEndDate}
      />
      <BoardListPage
        data={data}
        onClickDetailPage={onClickDetailPage}
        mySearch={mySearch}
      />
      <NavigationPage lastPage={lastPage} refetch={refetch} />
    </>
  );
}
