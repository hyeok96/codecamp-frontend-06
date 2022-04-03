import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      contents
      _id
    }
  }
`;

const Div = styled.div`
  height: 200px;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;
export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchboards) return { ...prev.fetchBoards };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchboards],
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el.number}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </InfiniteScroll>
  );
}
