import { getDate } from "../../../common/utils/utils";
import * as s from "./BoardComment.Styled";
import { IBoardCommentPresenterProps } from "./BoardComment.types";
import { MouseEvent } from "react";
import { Rate } from "antd";

export default function BoardCommentPresenter(
  props: IBoardCommentPresenterProps
) {
  const aaa = (e: MouseEvent<HTMLDivElement>) => {
    alert(`${e.currentTarget.id}님의 게시글입니다`);
  };

  return (
    <s.Main>
      <s.Comment>
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
        {props.commentData?.fetchBoardComments.map((el: any, index: number) => (
          <s.CommentFooter key={el._id} id={el.writer} onClick={aaa}>
            <s.CommentFooterBox>
              <s.CommentFooterProfileBox>
                <s.CommentFooterProfile>
                  <img src="/borad/Vector.png" />
                </s.CommentFooterProfile>
              </s.CommentFooterProfileBox>
              <s.CommentFooterMultiBox>
                <s.CommentFooterNameBox>
                  <s.CommentFooterNameRating>
                    <s.CommentFooterNameRatingName>
                      {el.writer}
                    </s.CommentFooterNameRatingName>
                    <s.CommentFooterNameRatingBox>
                      <Rate value={el.rating} disabled />
                    </s.CommentFooterNameRatingBox>
                  </s.CommentFooterNameRating>
                  <s.CommentFooterNameUpdate>
                    <s.CommentFooterNameUpdateIcon>
                      <img src="/borad/update.png" />
                    </s.CommentFooterNameUpdateIcon>
                    <s.CommentFooterNameDeleteIcon>
                      <img
                        src="/borad/delete.png"
                        id={el._id}
                        onClick={props.onClickDeleteBoardComment}
                      />
                    </s.CommentFooterNameDeleteIcon>
                  </s.CommentFooterNameUpdate>
                </s.CommentFooterNameBox>
                <s.CommentFooterText>{el.contents}</s.CommentFooterText>
                <s.CommentFooterDate>
                  {getDate(el.createdAt)}
                </s.CommentFooterDate>
              </s.CommentFooterMultiBox>
            </s.CommentFooterBox>
          </s.CommentFooter>
        ))}
      </s.Comment>
    </s.Main>
  );
}
