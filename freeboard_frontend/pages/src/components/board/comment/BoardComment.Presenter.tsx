import { getDate } from "../../../common/utils/utils";
import * as s from "./BoardComment.Styled";
import { IBoardCommentPresenterProps } from "./BoardComment.types";
import { Rate, Modal } from "antd";
import { Fragment } from "react";

export default function BoardCommentPresenter(
  props: IBoardCommentPresenterProps
) {
  return (
    <Fragment>
      <s.Main>
        <s.Comment>
          {props.commentData?.fetchBoardComments.map(
            (el: any, index: number) => (
              <Fragment key={el._id}>
                <s.CommentFooter id={el.writer}>
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
                          <s.CommentFooterNameDeleteIcon
                            id={el._id}
                            onClick={props.onClickModal}
                          >
                            <img src="/borad/delete.png" />
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
                <Modal
                  title="비밀번호입력"
                  visible={props.isOpen}
                  onCancel={props.onToggle}
                  onOk={() => props.onClickDeleteBoardComment(el._id)}
                >
                  <s.Input2
                    type="password"
                    onChange={props.onchangeCommentPassword}
                    id={el._id}
                    placeholder="비밀번호를 입력하세요"
                  />
                </Modal>
              </Fragment>
            )
          )}
        </s.Comment>
      </s.Main>
    </Fragment>
  );
}
