import {useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import BoardIdPresenter from "./BoardId.presenter"
import {FETCH_BOARD} from './BoardId.graph'

export default function BoardIdContainer() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id}
    })

    console.log(data)

    return (
       <BoardIdPresenter 
        data={data}
       />
    )
}

