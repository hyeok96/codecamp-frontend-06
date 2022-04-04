import * as s from "./BoardComment.Styled";
import { IBoardCommentPresenterProps } from "./BoardComment.types";
import { Fragment, useState, MouseEvent, ChangeEvent } from "react";
import { Rate, Modal } from "antd";
import {
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardComment.query";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../common/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentPresenter(
  props: IBoardCommentPresenterProps
) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [upDatePw, setUpDatePw] = useState("");
  const [upDateContents, setUpdateContents] = useState("");
  const [rating, setRating] = useState(0);
  const [changeRating, setChangeRating] = useState(false);

  const onClickMoveCommentPage = () => {
    setIsEdit(true);
  };

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeUpdatePw = (e: ChangeEvent<HTMLInputElement>) => {
    setUpDatePw(e.target.value);
  };

  const onChangeUpdateContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateContents(e.target.value);
  };

  const handleChange = (value: number) => {
    setChangeRating(true);
    setRating(value);
  };

  const onClickUpdateBoardComment = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const myVariables: IMutationUpdateBoardCommentArgs = {
        boardCommentId: String((e.target as HTMLDivElement).id),
        password: upDatePw,
        updateBoardCommentInput: {},
      };

      if (upDateContents !== "")
        myVariables.updateBoardCommentInput.contents = upDateContents;

      if (rating !== 0) myVariables.updateBoardCommentInput.rating = rating;

      await updateBoardComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });

      Modal.success({
        content: `댓글이 수정되었습니다.`,
      });
      setChangeRating(false);
      setIsEdit(false);
    } catch (e) {
      Modal.error({
        content: `${e.message}`,
      });
    }
  };

  return (
    <>
      {isEdit === false && (
        <s.Comment>
          <Fragment>
            <s.CommentFooter id={props.el.writer}>
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
                        {props.el.writer}
                      </s.CommentFooterNameRatingName>
                      <s.CommentFooterNameRatingBox>
                        <Rate value={props.el.rating} disabled />
                      </s.CommentFooterNameRatingBox>
                    </s.CommentFooterNameRating>
                    <s.CommentFooterNameUpdate>
                      <s.CommentFooterNameUpdateIcon
                        onClick={onClickMoveCommentPage}
                      >
                        <img src="/borad/update.png" />
                      </s.CommentFooterNameUpdateIcon>
                      <s.CommentFooterNameDeleteIcon
                        id={props.el._id}
                        onClick={props.onClickModal}
                      >
                        <img src="/borad/delete.png" />
                      </s.CommentFooterNameDeleteIcon>
                    </s.CommentFooterNameUpdate>
                  </s.CommentFooterNameBox>
                  <s.CommentFooterText>{props.el.contents}</s.CommentFooterText>
                  <s.CommentFooterDate>
                    {props.el.createdAt.slice(0, 10)}
                  </s.CommentFooterDate>
                </s.CommentFooterMultiBox>
              </s.CommentFooterBox>
            </s.CommentFooter>
            <Modal
              title="비밀번호입력"
              visible={props.isOpen}
              onCancel={props.onToggle}
              onOk={props.onClickDeleteBoardComment}
            >
              <s.Input2
                type="password"
                onChange={props.onChangePw}
                placeholder="비밀번호를 입력하세요"
              />
            </Modal>
          </Fragment>
        </s.Comment>
      )}
      {isEdit === true && (
        <s.Comment>
          <s.CommentBody>
            <s.CommentBodyInfo>
              <s.CommentBodyInfoRating>
                <Rate
                  value={changeRating ? rating : props.el.rating}
                  onChange={handleChange}
                />
              </s.CommentBodyInfoRating>
            </s.CommentBodyInfo>
            <s.CommentBodyWriteBox>
              <s.CommentBodyWrite>
                <s.CommentWriteInput
                  defaultValue={props.el.contents}
                  onChange={onChangeUpdateContents}
                ></s.CommentWriteInput>
              </s.CommentBodyWrite>
              <s.CommentBodyWriteSubmitBox>
                <s.CommentInputBox>
                  <s.CommentInput
                    disabled
                    placeholder="직성자"
                    value={props.el.writer}
                    readOnly
                  />
                  <s.CommentInput
                    type="password"
                    onChange={onChangeUpdatePw}
                    placeholder="비밀번호"
                  />
                </s.CommentInputBox>
                <s.CommentBodyWriteSubmit
                  id={props.el._id}
                  onClick={onClickUpdateBoardComment}
                >
                  수정하기
                </s.CommentBodyWriteSubmit>
              </s.CommentBodyWriteSubmitBox>
            </s.CommentBodyWriteBox>
          </s.CommentBody>
        </s.Comment>
      )}
    </>
  );
}
