import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 668px;
  background-color: #dc2f21;
`;

export const Text = styled.div`
  color: white;
  font-size: 100px;
`;

export const SmallText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1000px;
  color: white;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #dc2f21;
  padding-bottom: 100px;
  height: 100px;
`;

export const Logo = styled.img``;

export const Button = styled.button`
  border-radius: 15px;
  border: 1px solid #dc2f21;
  width: 200px;
  height: 100px;
  background-color: #fff;
  color: #dc2f21;
  &:hover {
    background-color: #dc2f21;
    color: white;
  }
`;

export const Div = styled.div`
  padding: 80px 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  margin: auto;
  width: 1200px;
`;
