import * as S from "./BoardList.styled";
import { IBestBoardDataProps } from "./BoardList.types";

export default function BoardListPresenter(props: IBestBoardDataProps) {
  return (
    <S.Wrapper>
      <S.Best>
        <S.BestTilte>베스트 게시글</S.BestTilte>
        <S.BestList>
          {props.bestBoardData?.fetchBoardsOfTheBest.map(
            (el: any, index: number) => (
              <S.BestListBox
                key={el._id}
                onClick={props.onClickMoveBestPage}
                id={el._id}
              >
                <S.BoardListBoxImage></S.BoardListBoxImage>
                <S.BoardListBoxTitle>{el.title}</S.BoardListBoxTitle>
                <S.BoardListBoxBody>
                  <S.BoardListBoxBodyProfile>
                    <S.BoxBodyProfileName>
                      <S.Image src="/list/profile.png" /> {el.writer}
                    </S.BoxBodyProfileName>
                    <S.BoxBodyProfileDate>
                      {el.createdAt.slice(0, 10)}
                    </S.BoxBodyProfileDate>
                  </S.BoardListBoxBodyProfile>
                  <S.BoardListBoxBodyIcon>
                    <S.LikeIcon>
                      <img src="/list/likeicon.png" />
                    </S.LikeIcon>
                    <S.LikeCount>{el.likeCount}</S.LikeCount>
                  </S.BoardListBoxBodyIcon>
                </S.BoardListBoxBody>
              </S.BestListBox>
            )
          )}
        </S.BestList>
      </S.Best>

      <S.Search>
        <S.RegisteBtn onClick={props.onClickBoardNewPage}>
          <img src="/list/register.png" style={{ paddingRight: "11px" }} />
          게시물등록하기
        </S.RegisteBtn>
        <S.SearchBox>
          <S.SearchBoxIcon></S.SearchBoxIcon>
          <S.SearchBoxInput
            placeholder="제목을 검색하세요"
            onChange={props.onChangeSearch}
          />
        </S.SearchBox>
        <S.SearchDate>
          <S.SearchDateStart
            placeholder="YYYY.MM.DD"
            onChange={props.onChangeStartDate}
          />{" "}
          ~
          <S.SearchDateEnd
            placeholder="YYYY.MM.DD"
            onChange={props.onChangeEndDate}
          />
        </S.SearchDate>
        <S.SearchBtn onClick={props.onClickSearchBoard}>검색하기</S.SearchBtn>
      </S.Search>
    </S.Wrapper>
  );
}
