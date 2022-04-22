import * as s from "./recommendList.style";
import { IRecommendPresenterProps } from "./recommendList.type";
import { v4 as uuidv4 } from "uuid";
import RecommendUpdateConainerPage from "../recomendUpdate/recomendUpdate.conatiner";
import { useState } from "react";

export default function RecommendPresenterPage(
  props: IRecommendPresenterProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickShoeUpdateRecommend = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
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
                      {props.el?.user.name}
                    </s.CommentFooterNameRatingName>
                  </s.CommentFooterNameRating>
                  <s.CommentFooterNameUpdate>
                    <s.CommentFooterNameUpdateIcon
                      onClick={onClickShoeUpdateRecommend}
                    >
                      <img src="/borad/update.png" />
                    </s.CommentFooterNameUpdateIcon>
                    <s.CommentFooterNameDeleteIcon
                      onClick={props.onClickDeleteRecommend(props.el?._id)}
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
      {isEdit && (
        <RecommendUpdateConainerPage
          key={props.el._id}
          el={props.el}
          id={props.id}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
