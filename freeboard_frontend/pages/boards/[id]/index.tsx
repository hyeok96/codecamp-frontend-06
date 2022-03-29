import { Fragment } from "react";
import BoardCommentContainer from "../../src/components/board/comment/BoardComment.Container";
import BoardIdContainer from "../../src/components/board/id/BoardId.container";
import BoardCommentWriterContainer from "../../src/components/board/commentWrite/BoardCommentWriter.container";

export default function FetchBoardPage() {
  return (
    <Fragment>
      <BoardIdContainer />
      <BoardCommentWriterContainer />
      <BoardCommentContainer />
    </Fragment>
  );
}
