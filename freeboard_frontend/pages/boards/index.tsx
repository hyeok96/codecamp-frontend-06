import { withAuth } from "../src/common/hocs/withAuth";
import BoardListConatiner from "../src/components/board/list/BoardList.container";

function BoardListPage() {
  withAuth(BoardListPage);

  return <BoardListConatiner />;
}

export default BoardListPage;
