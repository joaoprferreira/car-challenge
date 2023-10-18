import React from "react";
import * as S from "./styles";
import FormCars from "../../components/FormCars";
import Carousel from "../../components/Carousel";
import { useHome } from "./useHome";

function Home() {
  const { closeModal, openModal, isModalOpen } = useHome();
  return (
    <>
      <S.Container>
        <S.Header>
          <S.ContainerLogo>
            <img
              src="https://www.wswork.com.br/assets/img/logows.svg"
              alt=""
              height={40}
            />
            <S.Logo>Ws work Car challenge</S.Logo>
          </S.ContainerLogo>
          <S.ButtonCreateVehicle onClick={() => openModal()}>
            Criar novo veículo
          </S.ButtonCreateVehicle>
        </S.Header>
        <S.Main>
          <Carousel />
        </S.Main>
        <FormCars isOpen={isModalOpen} onClose={closeModal} />
      </S.Container>
    </>
  );
}

export default Home;
