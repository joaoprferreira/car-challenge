import styled from "styled-components";

export const Form = styled.form`
  height: 50%;
  flex: 1;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const SelectContainer = styled.div`
  position: relative;
`;

export const Select = styled.select.attrs({
  style: {
    width: 300,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "#fff",
    appearance: "listbox",
    cursor: "pointer",
  },
})``;

export const SelectOption = styled.option`
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  width: 90%;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2196f3;
    outline: none;
  }
`;

export const TextError = styled.p`
  color: red;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const SendButton = styled.button`
  width: 100%;
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

export const CancelButton = styled.button`
  width: 70%;
  color: #1976d2;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1976d1;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
`;
