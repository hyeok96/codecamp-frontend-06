import styled from '@emotion/styled'

// Wrapper

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding:60px 103px 0px 101px ;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`




// Div
export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 40px;
`

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`

export const Div3 = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 16px;
`

export const Div4 = styled.div`
    margin-right: 22px;
`

export const Div5 = styled.div`
    padding: 40px 0px 100px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const InnerDiv = styled.div`
    padding-right: 24px;
`

export const InnerDiv2 = styled.div`
    padding-right: 24px;
`

export const UploadDiv = styled.div`
    width: 78px;
    height: 78px;
    background-color: #BDBDBD;
    color: #4F4F4F;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
`



// Input
export const Input = styled.input`
    border: 1px solid #BDBDBD;
    width: 486px;
    height: 52px;
    padding-left: 10px;
`

export const TitleInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 100%;
    height: 52px;
    padding-left: 10px;
`

export const AddressInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 100%;
    height: 52px;
    padding-left: 10px;
`

export const CheckInput = styled.input`
    color: yellow;
`




// Button

export const Btn1 = styled.button`
    width: 77px;
    height: 52px;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    margin-right: 16px;
    color: #BDBDBD;
`

export const Btn2 = styled.button`
    width: 124px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    background: #000000;
    color: #FFFFFF;
`

export const Btn3 = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 60px;
    width: 179px;
    height: 52px;
    background: #FFD600;
`




// 기타
export const Title = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    padding-bottom: 80px;
`

export const MenuTitle = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
`

export const Text = styled.textarea`
    width: 996px;
    height: 480px;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    padding-left: 10px;
    padding-top: 14px;
`

// 에러박스
export const Error = styled.div`
    width: 100%;
    color: red;
    font-size: 16px;
`