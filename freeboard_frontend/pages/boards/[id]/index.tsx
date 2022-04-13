import { Fragment } from "react";
import BoardCommentContainer from "../../src/components/board/comment/BoardComment.Container";
import BoardIdContainer from "../../src/components/board/id/BoardId.container";
import BoardCommentWriterContainer from "../../src/components/board/commentWrite/BoardCommentWriter.container";
import { withAuth } from "../../src/common/hocs/withAuth";

function FetchBoardPage() {
  return (
    <Fragment>
      <BoardIdContainer />
      <BoardCommentWriterContainer />
      <BoardCommentContainer />
    </Fragment>
  );
}

export default withAuth(FetchBoardPage);
