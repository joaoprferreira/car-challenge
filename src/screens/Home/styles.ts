import styled from "styled-components";

export const Logo = styled.p`
  font-size: 20px;
  color: white;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #757ce8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 40px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Container = styled.main`
  flex: 1;
`;

export const ButtonCreateVehicle = styled.button`
  width: 10%;
  background-color: #ff7961;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ba000d;
  }
`;

export const Main = styled.main``;
