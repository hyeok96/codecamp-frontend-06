import * as S from "./BoardList.styled";

export default function BoardListPresenter() {
  return (
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
    </S.Wrapper>
  );
}
