import {MouseEvent} from "react"

export interface IBoardListPresenterPros {
    data: any
    onClickDetailPage: (e:MouseEvent<HTMLDivElement>) => void
    onClickBoardNewPage: () => void
}