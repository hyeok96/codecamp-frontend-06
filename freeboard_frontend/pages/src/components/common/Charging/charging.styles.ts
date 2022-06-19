import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 50px 60px;
  background: #ffffff;
  box-shadow: 5px 5px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const Title = styled.div`
  font-size: 40px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: none;
  background-color: #0d1c4a;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;

export const CanCelBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;
