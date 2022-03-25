import *  as s from "./BoardStyled"
import {ChangeEvent} from "react"
import {IBoardNewPresenterProps} from "./BoardNew.types"


export default function BoardNewPresenter(props: IBoardNewPresenterProps) {
    //랜더되는 부분
    return (
        <s.Wrapper>
        <s.Title>게시물 {props.isEdit? "수정":"등록"}</s.Title>
        <s.Div1>
          <s.InnerDiv>
            <s.MenuTitle>작성자</s.MenuTitle>
            <s.Input type="text" placeholder="이름을 적어주세요." onChange={props.onChangeName} defaultValue={props.data?.fetchBoard.writer}/>
            <s.Error>{props.errorName}</s.Error>
          </s.InnerDiv>
          <s.InnerDiv>
           <s.MenuTitle>비밀번호</s.MenuTitle>
           <s.Input type="password" placeholder="비밀번호을 적어주세요." onChange={props.onChangePw} />
           <s.Error>{props.errorPw}</s.Error>
          </s.InnerDiv>
        </s.Div1>
        <s.Div2>
          <s.MenuTitle>제목</s.MenuTitle>
          <s.TitleInput type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
          <s.Error>{props.errorTitle}</s.Error>
        </s.Div2>
        <s.Div2>
         <s.MenuTitle>내용</s.MenuTitle>
          <s.Text placeholder="내용을 작성해주세요." onChange={props.onChangeText} defaultValue={props.data?.fetchBoard.contents}></s.Text>
          <s.Error>{props.errorText}</s.Error>
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>주소</s.MenuTitle>
          <s.Div3>
            <s.Btn1>070250</s.Btn1>
            <s.Btn2>우편번호 감색</s.Btn2>
          </s.Div3>
          <s.Div3>
            <s.AddressInput onChange={props.onChangeAddress}/>
          </s.Div3>
          <s.TitleInput onChange={props.onChangeAddress}/>
          <s.Error></s.Error>
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>유튜브</s.MenuTitle>
          <s.TitleInput type="text" placeholder="링크를 복사해주세요." onChange={props.onChangeYoutube}/>
          <s.Error></s.Error>
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>사진 첨부</s.MenuTitle>
          <s.Div1>
            <s.UploadDiv>
               ✚<br/>Upload
            </s.UploadDiv>
            <s.UploadDiv>
              ✚<br/>Upload
            </s.UploadDiv>
            <s.UploadDiv>
              ✚<br/>Upload
            </s.UploadDiv>
          </s.Div1>
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>메인 설정</s.MenuTitle>
          <s.Div1>
            <s.Div4>
              <s.CheckInput type="radio" name="check" onChange={props.onChangeRadio}/>유튜브
            </s.Div4>
            <s.Div4>
              <s.CheckInput type="radio" name="check" onChange={props.onChangeRadio}/>사진
            </s.Div4>
          </s.Div1>
          <s.Error></s.Error>
        </s.Div2>
        <s.Div5>
          <s.Btn3 onClick={props.isEdit? props.onClickUpdate :props.onCilckRegister} isActive={props.isActive} isEdit={props.isEdit} isEditActive={props.isEditActive}>
          {props.isEdit? "수정":"등록"}하기
          </s.Btn3>
        </s.Div5>
        </s.Wrapper>
    )
  }

