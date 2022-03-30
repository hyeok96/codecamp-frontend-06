import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 400px;
  background-color: black;
  opacity: 0.7;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const Slider1 = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 100%;
`;

export const H3 = styled.h3`
  color: white;
  font-size: 50px;
`;

export const Text = styled.div`
  color: white;
  font-weight: 500;
  font-size: 12px;
`;
