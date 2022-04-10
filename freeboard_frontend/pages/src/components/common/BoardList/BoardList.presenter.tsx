import * as S from "./BoardList.styled";
import { IBoardListPresenterPros } from "../../../components/board/list/BoardList.types";
import { v4 as uuid } from "uuid";

export default function BoardListPage(props: IBoardListPresenterPros) {
  console.log();

  return (
    <S.Wrapper>
      <S.ListBox>
        <S.List>
          <S.RowTitle>
            <S.HeadColNum>번호</S.HeadColNum>
            <S.HeadColTitle>제목</S.HeadColTitle>
            <S.HeadColWriter>작성자</S.HeadColWriter>
            <S.HeadColDate>날짜</S.HeadColDate>
          </S.RowTitle>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <S.RowListTitle
              key={el._id}
              onClick={props.onClickDetailPage}
              id={el._id}
            >
              <S.ColNum>{index + 1}</S.ColNum>
              <S.ColTitle>
                {el.title
                  .replaceAll(props.mySearch, `#$%${props.mySearch}#$%`)
                  .split("#$%")
                  .map((el: string) => (
                    <S.Word key={uuid()} isMatched={props.mySearch === el}>
                      {el}
                    </S.Word>
                  ))}
              </S.ColTitle>
              <S.ColWriter>{el.writer}</S.ColWriter>
              <S.ColDate>{el.createdAt.slice(0, 10)}</S.ColDate>
            </S.RowListTitle>
          ))}
        </S.List>
      </S.ListBox>
    </S.Wrapper>
  );
}
