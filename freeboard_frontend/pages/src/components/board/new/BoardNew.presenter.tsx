import * as s from "./BoardStyled";
import { IBoardNewPresenterProps } from "./BoardNew.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import ImagePresenterPage from "../../common/Image/Image.presenter";

export default function BoardNewPresenter(props: IBoardNewPresenterProps) {
  // 랜더되는 부분
  console.log(props.data);

  return (
    <s.Wrapper>
      <s.Title>게시물 {props.isEdit ? "수정" : "등록"}</s.Title>
      <s.Div1>
        <s.InnerDiv>
          <s.MenuTitle>작성자</s.MenuTitle>
          <s.Input
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeInput}
            value={props.data?.fetchBoard.writer}
            id="name"
            readOnly={props.isEdit && true}
          />
          <s.Error>{props.errorName}</s.Error>
        </s.InnerDiv>
        <s.InnerDiv>
          <s.MenuTitle>비밀번호</s.MenuTitle>
          <s.Input
            type="password"
            placeholder="비밀번호을 적어주세요."
            onChange={props.onChangeInput}
            id="pw"
          />
          <s.Error>{props.errorPw}</s.Error>
        </s.InnerDiv>
      </s.Div1>
      <s.Div2>
        <s.MenuTitle>제목</s.MenuTitle>
        <s.TitleInput
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeInput}
          defaultValue={props.data?.fetchBoard.title}
          id="title"
        />
        <s.Error>{props.errorTitle}</s.Error>
      </s.Div2>
      <s.Div2>
        <s.MenuTitle>내용</s.MenuTitle>
        <s.Text
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeInput}
          defaultValue={props.data?.fetchBoard.contents}
          id="text"
        ></s.Text>
        <s.Error>{props.errorText}</s.Error>
      </s.Div2>
      <s.Div2>
        <s.MenuTitle>주소</s.MenuTitle>
        <s.Div3>
          <s.Input7
            value={
              props.input.addressZone ||
              props.data?.fetchBoard.boardAddress.zipcode
            }
            id="addressZone"
            readOnly
          ></s.Input7>
          <s.Btn2 onClick={props.onClickAddressModal}>우편번호 감색</s.Btn2>
        </s.Div3>
        <s.Div2>
          <s.AddressInput
            onChange={props.onChangeInput}
            value={
              props.input.address || props.data?.fetchBoard.boardAddress.address
            }
            readOnly
            id="address"
          />
          <s.AddressInput
            onChange={props.onChangeInput}
            defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
            placeholder="상세주소를 입력하세요"
            id="adresssDetail"
          />
        </s.Div2>
        <s.Error></s.Error>
        {props.isOpen && (
          <Modal
            title="주소 찾기"
            visible={props.isOpen}
            onOk={props.showModal}
            onCancel={props.showModal}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
      </s.Div2>
      <s.Div2>
        <s.MenuTitle>유튜브</s.MenuTitle>
        <s.TitleInput
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeInput}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
          id="youtube"
        />
        <s.Error></s.Error>
      </s.Div2>
      <ImagePresenterPage
        onChangeImg={props.onChangeImg}
        imgUrl={props.images}
        isEdit={props.isEdit}
        data={props.data}
      />
      <s.Div2>
        <s.MenuTitle>메인 설정</s.MenuTitle>
        <s.Div1>
          <s.Div4>
            <s.CheckInput type="radio" name="check" />
            유튜브
          </s.Div4>
          <s.Div4>
            <s.CheckInput type="radio" name="check" />
            사진
          </s.Div4>
        </s.Div1>
        <s.Error></s.Error>
      </s.Div2>
      <s.Div5>
        <s.Btn3
          onClick={props.isEdit ? props.onClickUpdate : props.onCilckRegister}
          isActive={props.isActive}
          isEdit={props.isEdit}
          isEditActive={props.isEditActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </s.Btn3>
      </s.Div5>
    </s.Wrapper>
  );
}
