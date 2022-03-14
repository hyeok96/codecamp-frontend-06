import {Wrapper, MyTitle, MyInput, Label} from '../../styles/emotion'

export default function aaaPage() {
    // 여기는 자바스크립트 쓰는 곳
   

    return (
        // html 쓰는 곳
        <Wrapper>
            <MyTitle>로그인</MyTitle>
            <Label>아이디</Label>
            <MyInput type='text' />
            <Label>비밀번호</Label>
            <MyInput type='password' />
        </Wrapper>
    )
}
