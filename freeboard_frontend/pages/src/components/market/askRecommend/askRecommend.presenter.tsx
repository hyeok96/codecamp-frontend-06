import * as s from "./askRecommend.style";
import { IAskRecommendPresenterProps } from "./askRecommend.type";

export default function AskRecommendPresenterPage(
  props: IAskRecommendPresenterProps
) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickCreateRecommend)}>
      <s.Main>
        <s.AskBody>
          <s.AskBodyWriteBox>
            <s.AskBodyWrite>
              <s.AskWriteInput
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                {...props.register("contents")}
              />
            </s.AskBodyWrite>
            <s.AskBodyWriteSubmitBox>
              <s.AskInputBox></s.AskInputBox>
              <s.AskBodyWriteSubmit>답글 등록</s.AskBodyWriteSubmit>
            </s.AskBodyWriteSubmitBox>
          </s.AskBodyWriteBox>
        </s.AskBody>
      </s.Main>
    </form>
  );
}
