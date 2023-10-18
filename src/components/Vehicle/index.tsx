import React from "react";
import * as S from "./styles";
import { brands } from "../../models/brands";
import useVehicle from "./useVehicle";

interface IVehicle {
  id?: number;
  imgSrc?: string;
  year: number;
  combustible: string;
  numberDoors: number;
  color: string;
  name_model: string;
  model_id?: string;
  value: number;
  brand: number;
  timesTamp: number;
}

function Vehicle({
  id,
  year,
  imgSrc,
  combustible,
  numberDoors,
  color,
  name_model,
  model_id,
  value,
  brand,
  timesTamp,
}: IVehicle) {
  const { formatPrice, formatTimesTamp } = useVehicle();

  return (
    <S.Card>
      <S.CardHeader>
        <S.CardTitle>{name_model}</S.CardTitle>
      </S.CardHeader>
      <S.CardImage>
        <img src={imgSrc} alt="" width="100%" />
      </S.CardImage>
      <S.CardBody>
        <S.Item>
          <S.Label>Portas:</S.Label>
          <S.CardDescription>{numberDoors}</S.CardDescription>
        </S.Item>
        <S.Item>
          <S.Label>Combustível:</S.Label>
          <S.CardDescription>{combustible}</S.CardDescription>
        </S.Item>
        <S.Item>
          <S.Label>Cor:</S.Label>
          <S.CardDescription>{color}</S.CardDescription>
        </S.Item>
        <S.Item>
          <S.Label>Valor:</S.Label>
          <S.CardDescription>{formatPrice(value)}</S.CardDescription>
        </S.Item>
        <S.Item>
          <S.Label>Marca:</S.Label>
          <S.CardDescription>{brands[brand]}</S.CardDescription>
        </S.Item>
        <S.Item>
          <S.Label>Ano:</S.Label>
          <S.CardDescription>{year}</S.CardDescription>
        </S.Item>
      </S.CardBody>
      <S.CardFooter>
        <S.Label>{formatTimesTamp(timesTamp)}</S.Label>
      </S.CardFooter>
    </S.Card>
  );
}

export default Vehicle;
