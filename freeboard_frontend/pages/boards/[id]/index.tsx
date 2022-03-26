import { Fragment } from "react";
import BoardCommentContainer from "../../src/components/board/comment/BoardComment.container";
import BoardIdContainer from "../../src/components/board/id/BoardId.container";

export default function FetchBoardPage() {
  return (
    <Fragment>
      <BoardIdContainer />
      <BoardCommentContainer />
    </Fragment>
  );
}
