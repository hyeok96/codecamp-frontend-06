// import axios from "axios"
import {useState} from "react"
import {useMutation, gql} from "@apollo/client"

const CREATEBOARD = gql`
    mutation{
        createBoard(writer: "sad", title: "asd", contents: "sda") {
            _id
            number
            message
        }
    }
`

export default function CraphqlMutationPage() {
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATEBOARD)

   

    const callGraphqlApi = async() => {
        // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
        const result = await callApi() // graph-api 방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    } 

    return (
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>graphql-api 요청하기</button>
        </div>
    )
}