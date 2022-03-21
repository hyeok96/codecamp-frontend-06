import {useState, } from "react"
import {useMutation, gql} from "@apollo/client"
import { useRouter } from "next/router"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents:String) {
        createBoard(writer: $writer, contents : $contents, title:$title) {
            _id
            number
            message
        }
    }
`

export default function CraphqlMutationPage() {
    const router = useRouter()
  
    const [callApi] = useMutation(CREATE_BOARD)

   const [myWriter, setMyWrite] = useState("")
   const [myTitle, setMyTitle] = useState("")
   const [myContent, setMyContent] = useState("")


    const callGraphqlApi = async() => {
        // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
        try {
            const result = await callApi({
                variables:{ writer: myWriter, title: myTitle, contents: myContent }
            }) // graph-api 방식
            console.log(result)
            console.log(result.data.createBoard.message)
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
        } catch (error) {
            alert(error.message)
        }
        
        // const banana = 3
        // const apple = 2

        // `철수는 ${banana} 를 가지고 있고, 사과를 ${apple}개 가지고 있습니다.`
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