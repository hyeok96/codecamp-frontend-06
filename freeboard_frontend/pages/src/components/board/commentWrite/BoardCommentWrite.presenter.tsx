import * as s from "./BoardCommentWrite.styled";
import { Rate } from "antd";
import { IBoardCommentPresenterProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriterPresenter(
  props: IBoardCommentPresenterProps
) {
  return (
    <s.Main>
      <s.CommentHeader>
        <s.CommentHeaderIcon>
          <img src="/borad/Comment.png" />
        </s.CommentHeaderIcon>
        <s.CommentHeaderText>댓글</s.CommentHeaderText>
      </s.CommentHeader>
      <s.CommentBody>
        <s.CommentBodyInfo>
          <s.CommentBodyInfoRating>
            <Rate onChange={props.handleChange} value={props.rating} />
          </s.CommentBodyInfoRating>
        </s.CommentBodyInfo>
        <s.CommentBodyWriteBox>
          <s.CommentBodyWrite>
            <s.CommentWriteInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeComment}
              value={props.contents}
            ></s.CommentWriteInput>
          </s.CommentBodyWrite>
          <s.CommentBodyWriteSubmitBox>
            <s.CommentInputBox>
              <s.CommentInput
                onChange={props.onChangeWriter}
                placeholder="직성자"
                value={props.writer}
              />
              <s.CommentInput
                type="password"
                onChange={props.onChangePw}
                placeholder="비밀번호"
                value={props.pw}
              />
            </s.CommentInputBox>
            <s.CommentBodyWriteSubmit onClick={props.onClickCreateComment}>
              등록하기
            </s.CommentBodyWriteSubmit>
          </s.CommentBodyWriteSubmitBox>
        </s.CommentBodyWriteBox>
      </s.CommentBody>
    </s.Main>
  );
}
