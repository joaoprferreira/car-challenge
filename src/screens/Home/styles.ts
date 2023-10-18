import styled from "styled-components";

export const Logo = styled.p`
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #ffea9f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 40px;
`;

export const Container = styled.main`
  flex: 1;
`;

export const ButtonCreateVehicle = styled.button`
  width: 10%;
  background-color: #2196f3;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1976d2;
  }
`;

export const Main = styled.main``;
