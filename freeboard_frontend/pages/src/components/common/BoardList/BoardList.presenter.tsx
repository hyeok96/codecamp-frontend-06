import * as S from "./BoardList.styled";
import { IBoardListPresenterPros } from "../../../components/board/list/BoardList.types";

export default function BoardListPage(props: IBoardListPresenterPros) {
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
            <S.RowTitle key={el._id}>
              <S.ColNum>{index + 1}</S.ColNum>
              <S.ColTitle id={el._id} onClick={props.onClickDetailPage}>
                {el.title}
              </S.ColTitle>
              <S.ColWriter>{el.writer}</S.ColWriter>
              <S.ColDate>{el.createdAt}</S.ColDate>
            </S.RowTitle>
          ))}
        </S.List>
      </S.ListBox>
    </S.Wrapper>
  );
}
