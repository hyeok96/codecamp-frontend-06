import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #dc2f21;
`;

export const Logo = styled.image``;

export const Button = styled.button`
  border-radius: 15px;
  border: 1px solid #dc2f21;
  width: 300px;
  height: 100px;
  background-color: white;
  color: #dc2f21;
  &:hover {
    background-color: #dc2f21;
    color: white;
  }
`;

export const Div = styled.div`
  margin: auto;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  margin: auto;
  width: 1200px;
  height: 100%;
`;
