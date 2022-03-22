import * as s from "./BoardId.styled"

export default function BoardIdPresenter(props) {

    return (
    <s.Main>
        <s.Wrapper>
            <s.Head>
                <s.HeadBox>
                    <s.HeadProfile>
                        <img src="/borad/Vector.png"/>
                    </s.HeadProfile>
                    <s.HeadNameBox>
                            <s.HeadName>{props.data? props.data.fetchBoard.writer : "loading"}</s.HeadName>
                            <s.HeadDate></s.HeadDate>
                    </s.HeadNameBox> 
                </s.HeadBox>
                <s.HeadBox>
                        <s.HeadIcon>
                            <img src="/borad/file.png"/>
                        </s.HeadIcon>
                        <s.HeadIcon>
                            <img src="/borad/map.png"/>
                        </s.HeadIcon>
                </s.HeadBox>
            </s.Head>
            <s.Body>
                <s.BodyTitle>{props.data? props.data.fetchBoard.title : "loading"}</s.BodyTitle>
                <s.BodyImage></s.BodyImage>
                <s.BodyText>{props.data? props.data.fetchBoard.contents : "loading"}</s.BodyText>
                <s.BodyVideoBox>
                    <s.BodyVideo></s.BodyVideo>
                </s.BodyVideoBox>
            </s.Body>
            <s.Footer>
                <s.FooterLikeBox>
                    <s.FooterLikeIcon>
                        <img src="/borad/like.png"/>
                    </s.FooterLikeIcon>
                    <s.FooterLikeCount>{props.data? props.data.fetchBoard.likeCount : "loading"}</s.FooterLikeCount>
                </s.FooterLikeBox>
                <s.FooterDisLikeBox>
                    <s.FooterDisLikeIcon>
                        <img src="/borad/dislike.png"/>
                    </s.FooterDisLikeIcon>
                    <s.FooterDisLikeCount>{props.data? props.data.fetchBoard.dislikeCount : "loading"}</s.FooterDisLikeCount>
                </s.FooterDisLikeBox>
            </s.Footer>
        </s.Wrapper>
        <s.UpdateMain>
            <s.UpdateBox>목록으로</s.UpdateBox>
            <s.UpdateBox>수정하기</s.UpdateBox>
            <s.UpdateBox id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>삭제하기</s.UpdateBox>
        </s.UpdateMain>
        <s.Comment>
            <s.CommentHeader>
                <s.CommentHeaderIcon>
                    <img src="/borad/Comment.png"/>
                </s.CommentHeaderIcon>
                <s.CommentHeaderText>댓글</s.CommentHeaderText>
            </s.CommentHeader>
            <s.CommentBody>
                <s.CommentBodyInfo>
                    <s.CommentBodyInfoRating>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                    </s.CommentBodyInfoRating>
                </s.CommentBodyInfo>
                <s.CommentBodyWriteBox>
                    <s.CommentBodyWrite>
                        <s.CommentWriteInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></s.CommentWriteInput>
                    </s.CommentBodyWrite>
                    <s.CommentBodyWriteSubmitBox>
                        <s.CommentBodyWriteSubmit>등록하기</s.CommentBodyWriteSubmit>
                    </s.CommentBodyWriteSubmitBox>
                </s.CommentBodyWriteBox>
            </s.CommentBody>
            <s.CommentFooter>
                <s.CommentFooterBox>
                    <s.CommentFooterProfileBox>
                        <s.CommentFooterProfile>
                            <img src="/borad/Vector.png"/>
                        </s.CommentFooterProfile>
                    </s.CommentFooterProfileBox>
                    <s.CommentFooterMultiBox>
                        <s.CommentFooterNameBox>
                            <s.CommentFooterNameRating>
                                <s.CommentFooterNameRatingName>노원두</s.CommentFooterNameRatingName>
                                <s.CommentFooterNameRatingBox>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                </s.CommentFooterNameRatingBox>
                            </s.CommentFooterNameRating>
                            <s.CommentFooterNameUpdate>
                                <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/update.png"/>
                                </s.CommentFooterNameUpdateIcon>
                                 <s.CommentFooterNameUpdateIcon>
                                     <img src="/borad/delete.png"/>
                                 </s.CommentFooterNameUpdateIcon>
                            </s.CommentFooterNameUpdate>
                        </s.CommentFooterNameBox>
                        <s.CommentFooterText>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</s.CommentFooterText>
                        <s.CommentFooterDate>2022.03.22</s.CommentFooterDate>
                    </s.CommentFooterMultiBox>
                </s.CommentFooterBox>
                <s.CommentFooterBox>
                    <s.CommentFooterProfileBox>
                        <s.CommentFooterProfile>
                            <img src="/borad/Vector.png"/>
                        </s.CommentFooterProfile>
                    </s.CommentFooterProfileBox>
                    <s.CommentFooterMultiBox>
                        <s.CommentFooterNameBox>
                            <s.CommentFooterNameRating>
                                <s.CommentFooterNameRatingName>땅지</s.CommentFooterNameRatingName>
                                <s.CommentFooterNameRatingBox>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                </s.CommentFooterNameRatingBox>
                            </s.CommentFooterNameRating>
                            <s.CommentFooterNameUpdate>
                                <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/update.png"/>
                                </s.CommentFooterNameUpdateIcon>
                                 <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/delete.png"/>
                                 </s.CommentFooterNameUpdateIcon>
                            </s.CommentFooterNameUpdate>
                        </s.CommentFooterNameBox>
                        <s.CommentFooterText>진짜 좋네요~ 감사합니다~!</s.CommentFooterText>
                        <s.CommentFooterDate>2022.03.22</s.CommentFooterDate>
                    </s.CommentFooterMultiBox>
                </s.CommentFooterBox>
                <s.CommentFooterBox>
                    <s.CommentFooterProfileBox>
                        <s.CommentFooterProfile>
                            <img src="/borad/Vector.png"/>
                        </s.CommentFooterProfile>
                    </s.CommentFooterProfileBox>
                    <s.CommentFooterMultiBox>
                        <s.CommentFooterNameBox>
                            <s.CommentFooterNameRating>
                                <s.CommentFooterNameRatingName>안우엽</s.CommentFooterNameRatingName>
                                <s.CommentFooterNameRatingBox>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                </s.CommentFooterNameRatingBox>
                            </s.CommentFooterNameRating>
                            <s.CommentFooterNameUpdate>
                                <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/update.png"/>
                                </s.CommentFooterNameUpdateIcon>
                                 <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/delete.png"/>
                                 </s.CommentFooterNameUpdateIcon>
                            </s.CommentFooterNameUpdate>
                        </s.CommentFooterNameBox>
                        <s.CommentFooterText>앞으로도 좋은 정보 부탁드립니다~!</s.CommentFooterText>
                        <s.CommentFooterDate>2022.03.22</s.CommentFooterDate>
                    </s.CommentFooterMultiBox>
                </s.CommentFooterBox>
            </s.CommentFooter> 
        </s.Comment>
    </s.Main>
    )
}

