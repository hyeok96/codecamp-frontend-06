import {useState} from "react"
import {useMutation, gql} from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../src/commons/types/generated/types"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents:String) {
        createBoard(writer: $writer, contents : $contents, title:$title) {
            message
        }
    }
`

export default function CraphqlMutationPage() {
    const [data, setData] = useState<string>("")
    const [callApi] = useMutation<Pick<IMutation,"createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)

   const [myWriter, setMyWrite] = useState("")
   const [myTitle, setMyTitle] = useState("")
   const [myContent, setMyContent] = useState("")


    const callGraphqlApi = async() => {
        // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
        const result = await callApi({
            variables:{ writer: myWriter, title: myTitle, contents: myContent }
        }) // graph-api 방식
        console.log(result)
        console.log(result.data?.createBoard?.message)
        // if(result.data?.createBoard?.message) setData(result.data?.createBoard?.message)
        setData(result.data?.createBoard?.message || "")
    } 

    const onChangeWiter = (e) => {
        setMyWrite(e.target.value)
    }

    const onChangeTitle = (e) => {
        setMyTitle(e.target.value)
    }

    const onChangeCOntent = (e) => {
        setMyContent(e.target.value)
    }
    return (
        <div>
            {/* <div>{data}</div> */}
            작성자: <input onChange={onChangeWiter} />
            제목: <input  onChange={onChangeTitle}/>
            내용: <input onChange={onChangeCOntent}/>
            <button onClick={callGraphqlApi}>graphql-api 요청하기</button>
        </div>
    )
}