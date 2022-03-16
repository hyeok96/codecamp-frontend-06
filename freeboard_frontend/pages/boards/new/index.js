import { Wrapper, Title, Div1, InnerDiv, 
         MenuTitle, Input, Div2, 
         TitleInput, Text, Div3,
         Btn1, Btn2, AddressInput,
         UploadDiv, CheckInput, Div4, Div5,
         Btn3, Error} from "../../../styles/boaderRegister"

import { useState } from "react" 

export default function register() {
  //state
  const[name, setName] = useState("")
  const[pw, setPw] = useState("")
  const[title, setTitle] = useState("")
  const[text, setText] = useState("")
  const[address, setAddress] = useState("")
  const[youtube, setYoutube] = useState("")
  const[radio, setRadio] = useState("")

  //에러 state
  const[errorName, setErrorName] = useState("")
  const[errorPw, setErrorPw] = useState("")
  const[errorTitle, setErrorTitle] = useState("")
  const[errorText, setErrorText] = useState("")
  const[errorAddress, setErrorAddress] = useState("")
  const[errorYoutube, setErrorYoutube] = useState("")
  const[errorRadio, setErrorRadio] = useState("")

  function onChangeName(e) {
    setName(e.target.value)
  }

  function onChangePw(e) {
    setPw(e.target.value)
  }

  function onChangeTitle(e) {
    setTitle(e.target.value)
  }

  function onChangeText(e) {
    setText(e.target.value)
  }

  function onChangeAddress(e) {
    setAddress(e.target.value)
  }

  function onChangeYoutube(e) {
    setYoutube(e.target.value)
  }

  function onChangeRadio(e) {
    setRadio(e.target.value)
  }


  function onCilckRegister() {
    if(name === "") {
      setErrorName("이름을 적어주세요")
    }
    if(pw === "") {
      setErrorPw("비밀번호을 적어주세요")
    }
    if(title === "") {
      setErrorTitle("제목을 적어주세요")
    }
    if(text === "") {
      setErrorText("내용을 적어주세요")
    }
    if(address === "") {
      setErrorAddress("주소를 적어주세요")
    }
    if(youtube === "") {
      setErrorYoutube("유튜브를 적어주세요")
    }
    if(radio === "") {
      setErrorRadio("메인설정을 선택해주세요")
    }

    if(name !== "" &&
       pw !== "" &&
       title !== "" &&
       text !== "" &&
       address !== "" &&
       youtube !== "" &&
       radio !== "") {
         setErrorName("")
         setErrorPw("")
         setErrorTitle("")
         setErrorText("")
         setErrorAddress("")
         setErrorYoutube("")
         setErrorRadio("")
         setTimeout(()=>{
          alert("게시물이 등록됩니다.")
         }, 100)
         
       }
  }

  //랜더되는 부분
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Div1>
        <InnerDiv>
          <MenuTitle>작성자</MenuTitle>
          <Input type="text" placeholder="이름을 적어주세요." onChange={onChangeName}/>
          <Error>{errorName}</Error>
        </InnerDiv>
        <InnerDiv>
         <MenuTitle>비밀번호</MenuTitle>
         <Input type="password" placeholder="비밀번호을 적어주세요." onChange={onChangePw} />
         <Error>{errorPw}</Error>
        </InnerDiv>
      </Div1>
      <Div2>
        <MenuTitle>제목</MenuTitle>
        <TitleInput type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
        <Error>{errorTitle}</Error>
      </Div2>
      <Div2>
       <MenuTitle>내용</MenuTitle>
        <Text type="text" placeholder="내용을 작성해주세요." onChange={onChangeText}></Text>
        <Error>{errorText}</Error>
      </Div2>
      <Div2>
        <MenuTitle>주소</MenuTitle>
        <Div3>
          <Btn1>070250</Btn1>
          <Btn2>우편번호 감색</Btn2>
        </Div3>
        <Div3>
          <AddressInput onChange={onChangeAddress}/>
        </Div3>
        <TitleInput onChange={onChangeAddress}/>
        <Error>{errorAddress}</Error>
      </Div2>
      <Div2>
        <MenuTitle>유튜브</MenuTitle>
        <TitleInput type="text" placeholder="링크를 복사해주세요." onChange={onChangeYoutube}/>
        <Error>{errorYoutube}</Error>
      </Div2>
      <Div2>
        <MenuTitle>사진 첨부</MenuTitle>
        <Div1>
          <UploadDiv>
             ✚<br/>Upload
          </UploadDiv>
          <UploadDiv>
            ✚<br/>Upload
          </UploadDiv>
          <UploadDiv>
            ✚<br/>Upload
          </UploadDiv>
        </Div1>
      </Div2>
      <Div2>
        <MenuTitle>메인 설정</MenuTitle>
        <Div1>
          <Div4>
            <CheckInput type="radio" name="check" onChange={onChangeRadio}/>유튜브
          </Div4>
          <Div4>
            <CheckInput type="radio" name="check" onChange={onChangeRadio}/>사진
          </Div4>
        </Div1>
        <Error>{errorRadio}</Error>
      </Div2>
      <Div5>
        <Btn3 onClick={onCilckRegister}>등록하기</Btn3>
      </Div5>
    </Wrapper>
  )
}