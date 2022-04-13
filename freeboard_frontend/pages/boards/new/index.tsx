import { withAuth } from "../../src/common/hocs/withAuth";
import BoardNewContainer from "../../src/components/board/new/BoardNew.container";

function register() {
  // 랜더되는 부분
  return <BoardNewContainer isEdit={false} />;
}

export default withAuth(register);
