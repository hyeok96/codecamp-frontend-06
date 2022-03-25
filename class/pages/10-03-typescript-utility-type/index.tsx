export default function TypescritePage() {
   
    interface IProfile{
        name: string
        age:number
        school: string
        hubby?: string
    }
    //1. pick type
    type mytype1 = Pick<IProfile, "name" | "age">


    //2.Omit type
    type mytype2 = Omit<IProfile, "school">

    //3. Partial type
    type mytype3 = Partial<IProfile>

 
   //4. Required type
   type mytype4 = Required<IProfile>

   //5. Record type (union type)
    type mytype5 = "aaa" | "qqq" | "rrr" 

    let apple:mytype5
    apple = "qqq"

    //
    type mytype6 = Record<mytype5, IProfile>

    // ===== 추가(선언방합) (type vs interface) =====

    interface IProfile{
        cnady: number
    }

    let profile:IProfile
    
    profile = {
            cnady: 3,
            age: 8,
            hubby: "adasd"
    }



    return (
    
        <div>타입스크립트 연습하기!!!</div>
    )
}