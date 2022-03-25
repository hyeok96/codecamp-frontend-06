export default function TypescritePage() {
    //타입추론
    let aaa = "안녕하세요"
    aaa = 3

    //타입명시
    let bbb: string = "반갑습니다"

    //문자타입
    let ccc: string
    ccc = "반가워요"
    ccc = 12

    //숫자타입
    let ddd: number = 10
    ddd = "ads"
    
    //블린타입
    let eee: boolean = true
    eee = "true" //트루로 작동함

    //배열타입
    let fff: number[] = [1,2,3,4,5. "안녕하세요 "]
    let ggg: string[] = ["영희", "철수", 12]
    let hhh: (number|string)[] = [1,2,3,4, "안녕하세요"] //또는 | 를 써서 type이 number이거나 string이어야 한다.
    
    //객체타입
    interface IProfile {
       name:string
       age: string | number
       school: string
       hoddy?: string //있어도 돠고 없어도 되고 ?로 표시
    }

    let profile: IProfile = {
        name:"철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    
    profile.age = "8살"
    profile.school = 1

    //함수타입
    const add = (money1: number, money2: number, unit: string): string => {
        return money1 + money2 + unit
    }

    //함수는 매개변수에 type을 정의한다. (): string은 리턴값의 타입

    add(1000, 2000, "원")
    
    return (
    
        <div>타입스크립트 연습하기!!!</div>
    )
}