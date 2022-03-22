import * as S from "./BoardList.styled"


export default function BoardListPresenter(props) {
    return(
        <S.Wrapper>
            <S.Best>
                <S.BestTilte>베스트 게시글</S.BestTilte>
                <S.BestList>
                    <S.BestListBox>
                        <S.BoardListBoxImage></S.BoardListBoxImage>
                        <S.BoardListBoxTitle>게시글 제목입니다.</S.BoardListBoxTitle>
                        <S.BoardListBoxBody>
                            <S.BoardListBoxBodyProfile>
                                <S.BoxBodyProfileName>
                                    <S.Image src="/list/profile.png" /> 노원두
                                </S.BoxBodyProfileName>
                                <S.BoxBodyProfileDate>Data: 2021.02.18</S.BoxBodyProfileDate>
                            </S.BoardListBoxBodyProfile>
                            <S.BoardListBoxBodyIcon>
                                <S.LikeIcon>
                                    <img src="/list/likeicon.png" />
                                </S.LikeIcon>
                                <S.LikeCount>356</S.LikeCount>
                            </S.BoardListBoxBodyIcon>
                        </S.BoardListBoxBody>
                    </S.BestListBox>
                    <S.BestListBox>
                    <S.BoardListBoxImage></S.BoardListBoxImage>
                        <S.BoardListBoxTitle>게시글 제목입니다.</S.BoardListBoxTitle>
                        <S.BoardListBoxBody>
                            <S.BoardListBoxBodyProfile>
                                <S.BoxBodyProfileName>
                                    <S.Image src="/list/profile.png" /> 노원두
                                </S.BoxBodyProfileName>
                                <S.BoxBodyProfileDate>Data: 2021.02.18</S.BoxBodyProfileDate>
                            </S.BoardListBoxBodyProfile>
                            <S.BoardListBoxBodyIcon>
                                <S.LikeIcon>
                                    <img src="/list/likeicon.png" />
                                </S.LikeIcon>
                                <S.LikeCount>356</S.LikeCount>
                            </S.BoardListBoxBodyIcon>
                        </S.BoardListBoxBody>
                    </S.BestListBox>
                    <S.BestListBox>
                    <S.BoardListBoxImage></S.BoardListBoxImage>
                        <S.BoardListBoxTitle>게시글 제목입니다.</S.BoardListBoxTitle>
                        <S.BoardListBoxBody>
                            <S.BoardListBoxBodyProfile>
                                <S.BoxBodyProfileName>
                                    <S.Image src="/list/profile.png" /> 노원두
                                </S.BoxBodyProfileName>
                                <S.BoxBodyProfileDate>Data: 2021.02.18</S.BoxBodyProfileDate>
                            </S.BoardListBoxBodyProfile>
                            <S.BoardListBoxBodyIcon>
                                <S.LikeIcon>
                                    <img src="/list/likeicon.png" />
                                </S.LikeIcon>
                                <S.LikeCount>356</S.LikeCount>
                            </S.BoardListBoxBodyIcon>
                        </S.BoardListBoxBody>
                    </S.BestListBox>
                    <S.BestListBox>
                    <S.BoardListBoxImage></S.BoardListBoxImage>
                        <S.BoardListBoxTitle>게시글 제목입니다.</S.BoardListBoxTitle>
                        <S.BoardListBoxBody>
                            <S.BoardListBoxBodyProfile>
                                <S.BoxBodyProfileName>
                                    <S.Image src="/list/profile.png" /> 노원두
                                </S.BoxBodyProfileName>
                                <S.BoxBodyProfileDate>Data: 2021.02.18</S.BoxBodyProfileDate>
                            </S.BoardListBoxBodyProfile>
                            <S.BoardListBoxBodyIcon>
                                <S.LikeIcon>
                                    <img src="/list/likeicon.png" />
                                </S.LikeIcon>
                                <S.LikeCount>356</S.LikeCount>
                            </S.BoardListBoxBodyIcon>
                        </S.BoardListBoxBody>
                    </S.BestListBox>
                </S.BestList>
            </S.Best>
            <S.Search>
                <S.SearchBox>
                    <S.SearchBoxIcon></S.SearchBoxIcon>
                    <S.SearchBoxInput placeholder="제목을 검색하세요"></S.SearchBoxInput>
                </S.SearchBox>
                <S.SearchDate>
                    <S.SearchDateStart placeholder="YYYY.MM.DD" /> ~
                    <S.SearchDateEnd placeholder="YYYY.MM.DD" />
                </S.SearchDate>
                <S.SearchBtn>검색하기</S.SearchBtn>
            </S.Search>
            <S.ListBox>
                <S.List>
                    <S.RowTitle>
                        <S.HeadColNum>번호</S.HeadColNum>
                        <S.HeadColTitle>제목</S.HeadColTitle>
                        <S.HeadColWriter>작성자</S.HeadColWriter>
                        <S.HeadColDate>날짜</S.HeadColDate>
                    </S.RowTitle>
                    {props.data?.fetchBoards.map((el, index) =>
                        <S.RowTitle key={el._id}>
                            <S.ColNum>{index+1}</S.ColNum>
                            <S.ColTitle  id={el._id} onClick={props.onClickDetailPage} >{el.title}</S.ColTitle>
                            <S.ColWriter>{el.writer}</S.ColWriter>
                            <S.ColDate>{el.createdAt.slice(0, 10)}</S.ColDate>
                        </S.RowTitle>
                    )}
                </S.List>
                <S.ListPage>
                    <S.PageBox>
                        <S.PrevBtn>
                            <img src="/list/prev.png"/>
                        </S.PrevBtn>
                        <S.PageNum>1</S.PageNum>
                        <S.PageNum2>2</S.PageNum2>
                        <S.NextBtn>
                            <img src="/list/next.png" />
                        </S.NextBtn>
                    </S.PageBox>
                    <S.RegisteBtn>
                        <img src="/list/register.png" style={{paddingRight: "11px"}} />
                        게시물등록하기
                    </S.RegisteBtn>
                </S.ListPage>
            </S.ListBox>
        </S.Wrapper>
    )
}