import {useState, ChangeEvent, MouseEvent} from "react"
//프리젠터 타입
export interface IBoardWriteUIProps {
    onChangeWiter: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCOntent: (e: ChangeEvent<HTMLInputElement>) => void
    callGraphqlApi: () => void
    isActive: boolean
    isEdit: boolean
    onClickUpdate: () => void
    data?: any
}

//스타링 타입
export interface ISubmitButtonProps {
    isActive: boolean
}

//컨테이너 타입
export interface IBoardWriteProps {
    isEdit: boolean
    data?: any 
}

export interface IMyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}