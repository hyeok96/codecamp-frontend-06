import BoardListPresenter from "./BoardList.presenter";
import {useQuery} from "@apollo/client"
import { FETCH_BOARDS } from "./BoardList.graph";
import { useRouter } from "next/router";

export default function BoardListConatiner() {

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS)
    

    const onClickDetailPage = (e) => {
        router.push(`/boards/${e.target.id}`)
    }

    const onClickBoardNewPage = () => {
        router.push(`/boards/new`)
    }

    return(
        <BoardListPresenter 
            data={data} 
            onClickDetailPage={onClickDetailPage}
            onClickBoardNewPage={onClickBoardNewPage}
        />
    )
}