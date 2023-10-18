import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 300px;
  min-height: 500px;
  margin: 20px;
`;

export const CardHeader = styled.div`
  background-color: #f44336;
  color: #fff;
  padding: 10px;
  border-radius: 4px 4px 0 0;
`;

export const CardImage = styled.div`
  width: 100%;
  min-height: 250px;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const CardBody = styled.main`
  padding: 20px;
  display: grid;
  grid: repeat(2, 80px) / auto-flow 80px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const CardFooter = styled.div`
  padding: 10px;
  text-align: center;
`;

export const CardFooterButton = styled.button`
  background-color: #2196f3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  border-radius: 10px;
`;

export const Label = styled.p`
  font-size: 13px;
  margin-bottom: 0;
`;
