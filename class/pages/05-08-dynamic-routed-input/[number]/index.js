import {useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
            number
        }
    }
`

export default function StaticRoutedPage() {
    const router = useRouter()

    const{data} = useQuery(FETCH_BOARD, {
        variables:{number: Number(router.query.number)}
    })

    console.log(data)

    return(
        <div>
            <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <div>내용: {data.fetchBoard}</div>
        </div>
       
    
    )

}