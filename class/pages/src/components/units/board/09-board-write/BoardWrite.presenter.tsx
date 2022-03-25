// 프리젠터 컴포넌트
import {WriterInput, SubmitButton} from "./BoardWrite.styled"
import {ChangeEvent} from "react"
import {IBoardWriteUIProps} from "./BoardWrite.types"



export default function BoardWriteUI(props: IBoardWriteUIProps) {
  
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>{props.isEdit? "수정" : "등록"}페이지</h1>
            작성자: <WriterInput onChange={props.onChangeWiter} defaultValue={props.data?.fetchBoard.writer}/>
            제목: <input  onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/><br />
            내용: <input onChange={props.onChangeCOntent} defaultValue={props.data?.fetchBoard.contents}/><br />
            <SubmitButton onClick={props.isEdit? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
                {props.isEdit? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    )
}