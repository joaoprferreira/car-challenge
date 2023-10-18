import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import FormCars from "../../components/FormCars";
import Vehicle from "../../components/Vehicle";
import Carousel from "../../components/Carousel";
import { AppContext } from "../../context/appContext";

function Home() {
  // const { addVehicle } = useContext(AppContext);

  // console.log("Contesxadanalk:>", addVehicle);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Logo>Ws work</S.Logo>
          <S.ButtonCreateVehicle onClick={() => openModal()}>
            Criar novo veículo
          </S.ButtonCreateVehicle>
        </S.Header>
        oi
        <S.Main>
          <Carousel />
        </S.Main>
        <FormCars isOpen={isModalOpen} onClose={closeModal} />
      </S.Container>
    </>
  );
}

export default Home;
