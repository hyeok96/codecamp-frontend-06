import { getDate } from "../../../common/utils/utils";
import * as s from "./BoardComment.Styled";
import { IBoardCommentPresenterProps } from "./BoardComment.types";
import { Rate } from "antd";

export default function BoardCommentPresenter(
  props: IBoardCommentPresenterProps
) {
  return (
    <s.Main>
      <s.Comment>
        {props.commentData?.fetchBoardComments.map((el: any, index: number) => (
          <s.CommentFooter key={el._id} id={el.writer}>
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
                      onClick={props.onClickDeleteBoardComment}
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
        ))}
      </s.Comment>
    </s.Main>
  );
}
