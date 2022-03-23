import {useMutation, useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import BoardIdPresenter from "./BoardId.presenter"
import {FETCH_BOARD, DELETE_BOARD} from './BoardId.graph'

export default function BoardIdContainer() {

    const router = useRouter()

    const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id}
    })

    const onClickDelete = (event) => {
        deleteBoard({
            variables:{boardId: event.target.id}
        })
        alert("게시물이 삭제되었습니다.")
        router.push("/boards")
    }

    const onClickUpdateMove = () => {
        router.push(`/boards/${router.query.id}/edit`)
    }

    const onClickBoardListMove = () => {
        router.push(`/boards`)
    }

    return (
       <BoardIdPresenter 
        data={data}
        onClickDelete={onClickDelete}
        onClickUpdateMove={onClickUpdateMove}
        onClickBoardListMove={onClickBoardListMove}
       />
    )
}

