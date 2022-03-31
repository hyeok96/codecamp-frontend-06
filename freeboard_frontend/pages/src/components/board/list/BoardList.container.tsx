import BoardListPresenter from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.graph";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../common/types/generated/types";
import NavigationPage from "../../common/Navigation/Navigation";
import BoardListPage from "../../common/BoardList/BoardList.presenter";

export default function BoardListConatiner() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: countData } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(countData?.fetchBoardsCount / 10);

  const onClickDetailPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(e.target as HTMLDivElement).id}`);
  };

  const onClickBoardNewPage = () => {
    router.push(`/boards/new`);
  };

  return (
    <>
      <BoardListPresenter />
      <BoardListPage data={data} onClickDetailPage={onClickDetailPage} />
      <NavigationPage
        onClickBoardNewPage={onClickBoardNewPage}
        lastPage={lastPage}
        refetch={refetch}
      />
    </>
  );
}
