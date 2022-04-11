import FuctionalComponenChildPage from "../21-02-functional-component-child";

export default function FuctionalComponentParentPage() {
  return <FuctionalComponenChildPage count={123} />;
  //   return <>{FuctionalComponenChildPage({ count: 123 })}</>;
}
