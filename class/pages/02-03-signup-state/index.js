import {useState} from 'react'

export default function SignUpStatePage() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   

    function onChangeEmail (event) {
        //event.target => 태그전체 <input .....
        //event.target.value => 우리가 입력한 값 a@naver....

        setEmail(event.target.value)
    }

    function onChangePassword (event) {
        setPassword(event.target.value)
    }

    function onClickSignUp () {
        //포장이 잘 되었는지 획인
        console.log(email)
        console.log(password)

        if(email.includes("@") === false) {
            alert("이메일이 올바르지 않습니다!! @가 없습니다.")
        } else {
            alert("회원가입을 축하합니다.")
        }
    }
   

    return(
        <div>
            이메일: <br /> <input type="text" onChange={onChangeEmail}/><br />
            비밀번호:<br /> <input type="password" onChange={onChangePassword}/><br />
            <button onClick={onClickSignUp}>회원가입</button>
        </div>
    )
}