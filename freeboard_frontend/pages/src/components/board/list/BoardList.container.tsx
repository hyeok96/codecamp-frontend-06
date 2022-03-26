import BoardListPresenter from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.graph";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../common/types/generated/types";

export default function BoardListConatiner() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDetailPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(e.target as HTMLDivElement).id}`);
  };

  const onClickBoardNewPage = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListPresenter
      data={data}
      onClickDetailPage={onClickDetailPage}
      onClickBoardNewPage={onClickBoardNewPage}
    />
  );
}
