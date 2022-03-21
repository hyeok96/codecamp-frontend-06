import BoardWriteUI from "./BoardWrite.presenter"
import {useState} from "react"
import {useMutation} from "@apollo/client"
import { CREATE_BOARD } from "./BoardWrite.queries"




export default function BoardWrite() {

    const [isActive, setIsActive] = useState(false)
    const [callApi] = useMutation(CREATE_BOARD)

    const [myWriter, setMyWrite] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContent, setMyContent] = useState("")


    const callGraphqlApi = async() => {
        // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
        const result = await callApi({
            variables:{ writer: myWriter, title: myTitle, contents: myContent }
        }) // graph-api 방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    } 

    const onChangeWiter = (e) => {
        setMyWrite(e.target.value)

        if(e.target.value !== '' && myTitle !== '' && myContent !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
      
    }

    const onChangeTitle = (e) => {
        setMyTitle(e.target.value)

        if(myWriter !== '' && e.target.value !== '' && myContent !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeCOntent = (e) => {
        setMyContent(e.target.value)

        if(myWriter !== '' && myTitle !== '' && e.target.value !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }


  

    return (
      <BoardWriteUI 
        onChangeWiter={onChangeWiter} 
        onChangeTitle={onChangeTitle} 
        onChangeCOntent={onChangeCOntent}
        callGraphqlApi={callGraphqlApi}
        isActive={isActive}
      />
    )
}

