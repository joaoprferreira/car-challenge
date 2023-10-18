import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80%;
  /* height: 300px; */
  margin: 0 auto;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Slider = styled.div`
  flex: 0 0 100px;
  height: 100px;
  scroll-snap-align: start;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
