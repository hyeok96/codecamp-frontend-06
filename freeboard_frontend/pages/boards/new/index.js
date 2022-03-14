import { Wrapper, Title, Div1, InnerDiv, 
         MenuTitle, Input, Div2, 
         TitleInput, Text, Div3,
         Btn1, Btn2, AddressInput,
         UploadDiv, CheckInput, Div4, Div5,
         Btn3} from "../../../styles/boaderRegister"

export default function Home() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Div1>
        <InnerDiv>
          <MenuTitle>작성자</MenuTitle>
          <Input />
        </InnerDiv>
        <InnerDiv>
         <MenuTitle>비밀번호</MenuTitle>
         <Input />
        </InnerDiv>
      </Div1>
      <Div2>
        <MenuTitle>제목</MenuTitle>
        <TitleInput />
      </Div2>
      <Div2>
       <MenuTitle>내용</MenuTitle>
        <Text></Text>
      </Div2>
      <Div2>
        <MenuTitle>주소</MenuTitle>
        <Div3>
          <Btn1>070250</Btn1>
          <Btn2>우편번호 감색</Btn2>
        </Div3>
        <Div3>
          <AddressInput />
        </Div3>
        <TitleInput />
      </Div2>
      <Div2>
        <MenuTitle>유튜브</MenuTitle>
        <TitleInput />
      </Div2>
      <Div2>
        <MenuTitle>사진 첨부</MenuTitle>
        <Div1>
          <UploadDiv>Upload</UploadDiv>
          <UploadDiv>Upload</UploadDiv>
          <UploadDiv>Upload</UploadDiv>
        </Div1>
      </Div2>
      <Div2>
        <MenuTitle>메인 설정</MenuTitle>
        <Div1>
          <Div4>
            <CheckInput type="radio" name="check" />유튜브
          </Div4>
          <Div4>
            <CheckInput type="radio" name="check" />사진
          </Div4>
        </Div1>
      </Div2>
      <Div5>
        <Btn3>등록하기</Btn3>
      </Div5>
    </Wrapper>
  )
}