import * as s from "./myProfile.style";

export default function MyProfilePresenterPage() {
  return (
    <s.Wrapper>
      <s.Title>비밀번호 변경</s.Title>
      <s.InputBox>
        <s.InputTitle>현재 비밀번호</s.InputTitle>
        <s.Input placeholder="현재 비밀번호를 입력하세요" type="password" />
      </s.InputBox>
      <s.InputBox>
        <s.InputTitle>새 비밀번호</s.InputTitle>
        <s.Input placeholder="현재 비밀번호를 입력하세요" type="password" />
      </s.InputBox>
      <s.InputBox>
        <s.InputTitle>새 비밀번호 확인</s.InputTitle>
        <s.Input placeholder="현재 비밀번호를 입력하세요" type="password" />
      </s.InputBox>
      <s.BtnBox>
        <s.Btn>비밀번호 변경</s.Btn>
      </s.BtnBox>
    </s.Wrapper>
  );
}
