import AskListContainerPage from "../../src/components/market/askList/askList.Container";
import AskWriterConainerPage from "../../src/components/market/askWriter/askwriter.conatiner";
import MarketIdContainerPage from "../../src/components/market/id/market.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketIdContainerPage />
      <AskWriterConainerPage />
      <AskListContainerPage />
    </>
  );
}
