// 프리젠터 컴포넌트
import {WriterInput, SubmitButton} from "./BoardWrite.styled"

export default function BoardWriteUI(props) {
  
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>{props.isEdit? "수정" : "등록"}페이지</h1>
            작성자: <WriterInput onChange={props.onChangeWriter} />
            제목: <input  onChange={props.onChangeTitle}/>
            내용: <input onChange={props.onChangeCOntent}/>
            <SubmitButton onClick={props.isEdit? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
                {props.isEdit? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    )
}