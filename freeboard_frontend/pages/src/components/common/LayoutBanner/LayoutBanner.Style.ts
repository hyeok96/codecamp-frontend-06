import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 400px;
  background-color: #c92a1f;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

export const Slider1 = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 90%;
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

export const BannerImg = styled.img`
  width: 1100px;
  height: 350px;
`;
