import * as s from "./BoardId.styled";
import { IBoardIdPresenterProps } from "./BoardId.types";
import { getDate } from "../../../common/utils/utils";
import React from "react";
import ReactPlayer from "react-player";

export default function BoardIdPresenter(props: IBoardIdPresenterProps) {
  return (
    <s.Main>
      <s.Wrapper>
        <s.Head>
          <s.HeadBox>
            <s.HeadProfile>
              <img src="/borad/Vector.png" />
            </s.HeadProfile>
            <s.HeadNameBox>
              <s.HeadName>
                {props.data ? props.data.fetchBoard.writer : "loading"}
              </s.HeadName>
              <s.HeadDate>
                {getDate(
                  props.data ? props.data.fetchBoard.createdAt : "loading"
                )}
              </s.HeadDate>
            </s.HeadNameBox>
          </s.HeadBox>
          <s.HeadBox>
            <s.HeadIcon>
              <img src="/borad/file.png" />
            </s.HeadIcon>
            <s.HeadIcon>
              <img src="/borad/map.png" />
            </s.HeadIcon>
          </s.HeadBox>
        </s.Head>
        <s.Body>
          <s.BodyTitle>
            {props.data ? props.data.fetchBoard.title : "loading"}
          </s.BodyTitle>
          <s.BodyImage></s.BodyImage>
          <s.BodyText>
            {props.data ? props.data.fetchBoard.contents : "loading"}
          </s.BodyText>
          <s.BodyVideoBox>
            <s.BodyVideo>
              <ReactPlayer
                url={`${props.data?.fetchBoard.youtubeUrl}`}
                width={486}
                height={240}
                playing={true}
                loop={true}
              />
            </s.BodyVideo>
          </s.BodyVideoBox>
        </s.Body>
        <s.Footer>
          <s.FooterLikeBox>
            <s.FooterLikeIcon onClick={props.onClickLikeBoard}>
              <s.Like />
            </s.FooterLikeIcon>
            <s.FooterLikeCount>
              {props.data ? props.data.fetchBoard.likeCount : "loading"}
            </s.FooterLikeCount>
          </s.FooterLikeBox>
          <s.FooterDisLikeBox>
            <s.FooterDisLikeIcon onClick={props.onClickDisLikeBoard}>
              <s.DisLike />
            </s.FooterDisLikeIcon>
            <s.FooterDisLikeCount>
              {props.data ? props.data.fetchBoard.dislikeCount : "loading"}
            </s.FooterDisLikeCount>
          </s.FooterDisLikeBox>
        </s.Footer>
      </s.Wrapper>
      <s.UpdateMain>
        <s.UpdateBox onClick={props.onClickBoardListMove}>목록으로</s.UpdateBox>
        <s.UpdateBox onClick={props.onClickUpdateMove}>수정하기</s.UpdateBox>
        <s.UpdateBox
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </s.UpdateBox>
      </s.UpdateMain>
    </s.Main>
  );
}
