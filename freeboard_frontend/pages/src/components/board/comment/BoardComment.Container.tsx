import BoardCommentPresenter from "./BoardComment.Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.query";
import { useState, ChangeEvent, MouseEvent } from "react";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { InfiniteScroller } from "./BoardComment.Styled";

export default function BoardCommentContainer() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [pw, setPw] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const { data: commentData, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onClickModal = async (e: MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen);
    setDeleteId(String(e.currentTarget.id));
  };

  const onClickDeleteBoardComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: pw,
          boardCommentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.id),
            },
          },
        ],
      });
      Modal.success({
        content: `댓글이 삭제되었습니다.`,
      });
      setIsOpen(!isOpen);
    } catch (error) {
      Modal.error({
        content: `${error.message}`,
      });
      setIsOpen(!isOpen);
    }
  };

  const loadMore = () => {
    if (!commentData) return;

    fetchMore({
      variables: {
        page: Math.ceil(commentData?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <InfiniteScroller>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true}
        useWindow={false}
      >
        {commentData?.fetchBoardComments.map((el) => (
          <BoardCommentPresenter
            commentData={commentData}
            onClickDeleteBoardComment={onClickDeleteBoardComment}
            onToggle={onToggle}
            isOpen={isOpen}
            onClickModal={onClickModal}
            onChangePw={onChangePw}
            el={el}
            key={el._id}
          />
        ))}
      </InfiniteScroll>
    </InfiniteScroller>
  );
}
