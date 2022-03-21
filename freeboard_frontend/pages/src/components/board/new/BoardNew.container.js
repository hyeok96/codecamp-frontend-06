import { useState} from "react" 
import {useRouter} from "next/router"
import {useMutation}from "@apollo/client"
import BoardNewPresenter from "./BoardNew.presenter"
import {createBoard} from "./BoarderNew.graph"
 
export default function BoardNewContainer() {
  
    const router = useRouter()

    //state
    const[name, setName] = useState("")
    const[pw, setPw] = useState("")
    const[title, setTitle] = useState("")
    const[text, setText] = useState("")
    const[address, setAddress] = useState("")
    const[youtube, setYoutube] = useState("")
    const[radio, setRadio] = useState("")
    const[isActive, setIsActive] =useState(false)
  
    //에러 state
    const[errorName, setErrorName] = useState("")
    const[errorPw, setErrorPw] = useState("")
    const[errorTitle, setErrorTitle] = useState("")
    const[errorText, setErrorText] = useState("")
    const[errorAddress, setErrorAddress] = useState("")
    const[errorYoutube, setErrorYoutube] = useState("")
    const[errorRadio, setErrorRadio] = useState("")
  
    const [create] = useMutation(createBoard)
  
    function onChangeName(e) {
      setName(e.target.value)

      if(e.target.value !== "" && pw !== "" && title !== "" && text !== "") {
        setIsActive(true)
      } else {
        setIsActive(false)
      }

    }
  
    function onChangePw(e) {
      setPw(e.target.value)

      if(name !== "" && e.target.value !== "" && title !== "" && text !== "") {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeTitle(e) {
      setTitle(e.target.value)

      if(name !== "" && pw !== "" && e.target.value !== "" && text !== "") {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeText(e) {
      setText(e.target.value)

      if(name !== "" && pw !== "" && title !== "" &&  e.target.value !== "") {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
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
  
  
    async function onCilckRegister() {
      if(name === "") {
        setErrorName("이름을 적어주세요")
      } else {
        setErrorName("")
      }
      if(pw === "") {
        setErrorPw("비밀번호을 적어주세요")
      } else {
        setErrorPw("")
      }
      if(title === "") {
        setErrorTitle("제목을 적어주세요")
      }else {
        setErrorTitle("")
      }
      if(text === "") {
        setErrorText("내용을 적어주세요")
      }else{
        setErrorText("")
      }
      if(name !== "" &&
         pw !== "" &&
         title !== "" &&
         text !== "" ) {
           try{
  
            const result = await create({
              variables: {
               createBoardInput: {
                 writer: name,
                 password: pw,
                 title: title,
                 contents: text,
                 youtubeUrl: youtube,
                 boardAddress: {
                   address: address
                 },
                 images:[]
               }
              }
            })
            alert("등록되었습니다.")
   
            router.push(`/boards/${result.data.createBoard._id}`)
  
           } catch (error) {
              alert(error.message)
           }
          
         }
    }

    //랜더되는 부분
    return (
        <BoardNewPresenter 
            onChangeName={onChangeName}
            onChangePw={onChangePw}
            onChangeTitle={onChangeTitle}
            onChangeText={onChangeText}
            onChangeAddress={onChangeAddress}
            onChangeYoutube={onChangeYoutube}
            onChangeRadio={onChangeRadio}
            onCilckRegister={onCilckRegister}
            errorName={errorName}
            errorPw={errorPw}
            errorTitle={errorTitle}
            errorText={errorText}
            isActive={isActive}
        />
    )
  }

