import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styes";
import { AppContext } from "../../context/appContext";
import { IVehicle } from "../../context/types";

enum BrandEnum {
  Hyunday = 0,
  Honda = 1,
  Toyota = 2,
  Volkswagen = 3,
  Mitsubishi = 4,
  Ford = 5,
  Fiat = 6,
  Chevrolet = 7,
}

function FormCars({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { register, handleSubmit } = useForm<IVehicle>();

  const { addVehicle, state } = useContext(AppContext);

  const vehicles = JSON.parse(
    localStorage.getItem("vehicles") || "[]"
  ) as IVehicle[];
  const lastVehicle = vehicles[vehicles.length - 1];
  let nextId = 1;
  if (lastVehicle) {
    nextId = lastVehicle.id + 1;
  }

  const onSubmit: SubmitHandler<IVehicle> = (data: IVehicle) => {
    addVehicle({
      ...data,
      value: Number(data.value),
      registrationDate: Math.floor(Date.now() / 1000),
      id: nextId,
    });
  };

  if (!isOpen) return null;

  return (
    <S.ModalBackground>
      <S.ModalContent>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputText {...register("image")} placeholder="www.image.jpg" />
          <S.InputText {...register("name_model")} placeholder="Modelo" />
          <S.InputText {...register("year")} placeholder="Ano" />
          <S.SelectContainer>
            <S.Select {...register("brand")}>
              <option value={0}>Toyota</option>
              <option value={1}>Honda</option>
              <option value={2}>Hyunday</option>
              <option value={3}>Volkswagen</option>
              <option value={4}>Mitsubishi</option>
              <option value={5}>Ford</option>
              <option value={6}>Fiat</option>
              <option value={7}>Chevrolet</option>
            </S.Select>
          </S.SelectContainer>
          <S.InputText {...register("color")} placeholder="Cor" />
          <S.InputText {...register("combustible")} placeholder="Combustível" />
          <S.InputText {...register("numberDoors")} placeholder="Portas" />
          <S.InputText {...register("value")} placeholder="valor" />
          <S.ContainerButton>
            <S.CancelButton onClick={() => onClose()}>Cancelar</S.CancelButton>
            <S.SendButton onClick={handleSubmit(onSubmit)}>
              Criar veículo
            </S.SendButton>
          </S.ContainerButton>
        </S.Form>
      </S.ModalContent>
    </S.ModalBackground>
  );
}

export default FormCars;
