import * as s from "./askList.style";
import { Rate } from "antd";

export default function AskListPresenterPage() {
  return (
    <s.Comment>
      <s.CommentFooter>
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
                  노원두
                </s.CommentFooterNameRatingName>
                <s.CommentFooterNameRatingBox>
                  <Rate />
                </s.CommentFooterNameRatingBox>
              </s.CommentFooterNameRating>
              <s.CommentFooterNameUpdate>
                <s.CommentFooterNameUpdateIcon>
                  <img src="/borad/update.png" />
                </s.CommentFooterNameUpdateIcon>
                <s.CommentFooterNameDeleteIcon>
                  <img src="/borad/delete.png" />
                </s.CommentFooterNameDeleteIcon>
              </s.CommentFooterNameUpdate>
            </s.CommentFooterNameBox>
            <s.CommentFooterText>asdasdadadasdasdadasd</s.CommentFooterText>
            <s.CommentFooterDate>2002.02.20</s.CommentFooterDate>
          </s.CommentFooterMultiBox>
        </s.CommentFooterBox>
      </s.CommentFooter>
    </s.Comment>
  );
}
