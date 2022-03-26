import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardIdPresenter from "./BoardId.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardId.graph";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../common/types/generated/types";

export default function BoardIdContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  const onClickDelete = (event: MouseEvent<HTMLDivElement>) => {
    deleteBoard({
      variables: { boardId: (event.target as HTMLButtonElement).id },
    });
    alert("게시물이 삭제되었습니다.");
    router.push("/boards");
  };

  const onClickUpdateMove = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickBoardListMove = () => {
    router.push(`/boards`);
  };

  return (
    <BoardIdPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdateMove={onClickUpdateMove}
      onClickBoardListMove={onClickBoardListMove}
    />
  );
}
