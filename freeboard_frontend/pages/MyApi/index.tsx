import { withAuth } from "../src/common/hocs/withAuth";
import MyApiContainerPage from "../src/components/myApi/MyApi.container";

function API() {
  return <MyApiContainerPage />;
}

export default withAuth(API);
