import BoardListPresenter from "./BoardList.presenter";
import {useQuery} from "@apollo/client"
import { FETCH_BOARDS } from "./BoardList.graph";
import { useRouter } from "next/router";

export default function BoardListConatiner() {

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS)
    

    const onClickDetailPage = (e) => {
        console.log(e.target.value)
        router.push(`/boards/${e.target.id}`)
    }

    return(
        <BoardListPresenter data={data} onClickDetailPage={onClickDetailPage}/>
    )
}