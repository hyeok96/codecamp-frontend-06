//컨테이너  컴포넌트
import BoardWriteUI from "./BoardWrite.presenter"
import {useState, ChangeEvent, MouseEvent} from "react"
import {useMutation} from "@apollo/client"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import {useRouter} from "next/router"
import {IBoardWriteProps, IMyVariables} from "./BoardWrite.types"



export default function BoardWrite(props: IBoardWriteProps) {

    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [callApi] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const [myWriter, setMyWrite] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContent, setMyContent] = useState("")

    const onClickUpdate = async() => {
        

        const myVariables: IMyVariables = {number:Number(router.query.mynumber)}

        if(myWriter !== "") myVariables.writer = myWriter 
        if(myTitle !== "") myVariables.title = myTitle
        if(myContent !== "") myVariables.contents = myContent  

        const result = await updateBoard({
            variables: myVariables
        })
        alert("게시글 수정에 성공하셨습니다.")
        router.push(`/09-01-boards/${router.query.mynumber}`)
    }

    const callGraphqlApi = async() => {
        // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
        const result = await callApi({
            variables:{ writer: myWriter, title: myTitle, contents: myContent }
        }) // graph-api 방식
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
        alert("게시글 동록에 성공하셨습니다.")
        router.push(`/09-01-boards/${result.data.createBoard.number}`)
        
    } 

    const onChangeWiter = (e: ChangeEvent<HTMLInputElement>) => {
        setMyWrite(e.target.value)

        if(e.target.value !== '' && myTitle !== '' && myContent !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
      
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(e.target.value)

        if(myWriter !== '' && e.target.value !== '' && myContent !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeCOntent = (e: ChangeEvent<HTMLInputElement>) => {
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
        isEdit={props.isEdit}
        onClickUpdate={onClickUpdate}
        data={props.data}
      />
    )
}