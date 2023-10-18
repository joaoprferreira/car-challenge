import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const titleCarousel = styled.p`
  font-size: 24px;
  color: #333;
  margin: 10px 0;
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
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
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
