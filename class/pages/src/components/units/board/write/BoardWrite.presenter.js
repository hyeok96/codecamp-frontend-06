import {WriterInput, SubmitButton} from "./BoardWrite.styled"

export default function BoardWriteUI(props) {
  
    return (
        <div>
            {/* <div>{data}</div> */}
            작성자: <WriterInput onChange={props.onChangeWriter} />
            제목: <input  onChange={props.onChangeTitle}/>
            내용: <input onChange={props.onChangeCOntent}/>
            <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>graphql-api 요청하기</SubmitButton>
        </div>
    )
}

