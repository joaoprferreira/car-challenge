import React from "react";
import * as S from "./styes";
import "react-toastify/dist/ReactToastify.css";
import useFormCars from "./useFormCars";

function FormCars({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { errors, handleSubmit, register, onSubmit } = useFormCars({ onClose });

  if (!isOpen) return null;

  return (
    <S.ModalBackground>
      <S.ModalContent>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputText {...register("image")} placeholder="www.image.jpg" />
          {errors.image && <S.TextError> {errors.image.message}</S.TextError>}
          <S.InputText {...register("name_model")} placeholder="Modelo" />
          {errors.name_model && (
            <S.TextError>{errors.name_model.message}</S.TextError>
          )}
          <S.InputText {...register("year")} placeholder="Ano" />
          {errors.year && <S.TextError>{errors.year.message}</S.TextError>}
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
          {errors.brand && <S.TextError>{errors.brand.message}</S.TextError>}
          <S.InputText {...register("color")} placeholder="Cor" />
          {errors.color && <S.TextError>{errors.color.message}</S.TextError>}
          <S.InputText {...register("combustible")} placeholder="Combustível" />
          {errors.combustible && (
            <S.TextError>{errors.combustible.message}</S.TextError>
          )}
          <S.InputText {...register("numberDoors")} placeholder="Portas" />
          {errors.numberDoors && (
            <S.TextError>{errors.numberDoors.message}</S.TextError>
          )}
          <S.InputText {...register("value")} placeholder="valor" />
          {errors.value && <S.TextError>{errors.value.message}</S.TextError>}

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
