import * as s from "./askList.style";
import { IAskListPresenterProps } from "./askList.type";
import AskRecommendContainerPage from "../askRecommend/askRecommend.container";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AskUpdateConainerPage from "../askUpdate/askUpdate.conatiner";
export default function AskListPresenterPage(props: IAskListPresenterProps) {
  const [isEidt, setIsEidt] = useState(false);
  // const [count, setCount] = useState([]);

  const onClickShowUpdateComment = () => {
    setIsEidt(true);
  };

  const [isShowRecommend, setIsShowRecommend] = useState(false);

  const onClickShowRecommend = () => {
    setIsShowRecommend(!isShowRecommend);
  };
  return (
    <>
      {!isEidt && (
        <s.Comment key={props.el?._id}>
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
                      {props.el?.user.name}
                    </s.CommentFooterNameRatingName>
                  </s.CommentFooterNameRating>
                  <s.CommentFooterNameUpdate>
                    <s.CommentFooterNameUpdateIcon
                      onClick={onClickShowRecommend}
                    >
                      <img src="/askList/recomment.png" />
                    </s.CommentFooterNameUpdateIcon>
                    <s.CommentFooterNameUpdateIcon
                      onClick={onClickShowUpdateComment}
                    >
                      <img src="/borad/update.png" />
                    </s.CommentFooterNameUpdateIcon>
                    <s.CommentFooterNameDeleteIcon
                      onClick={props.onClickDeleteUseditmeQusetion(
                        props.el?._id
                      )}
                    >
                      <img src="/borad/delete.png" />
                    </s.CommentFooterNameDeleteIcon>
                  </s.CommentFooterNameUpdate>
                </s.CommentFooterNameBox>
                <s.CommentFooterText>{props.el?.contents}</s.CommentFooterText>
                <s.CommentFooterDate>
                  {props.el?.createdAt.slice(0, 10)}
                </s.CommentFooterDate>
              </s.CommentFooterMultiBox>
            </s.CommentFooterBox>
          </s.CommentFooter>
        </s.Comment>
      )}
      {isEidt && <AskUpdateConainerPage el={props.el} setIsEidt={setIsEidt} />}
      {isShowRecommend && <AskRecommendContainerPage el={props.el._id} />}
    </>
  );
}
