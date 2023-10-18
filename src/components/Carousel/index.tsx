import React, { memo, useContext } from "react";
import * as S from "./styles";
import Vehicle from "../Vehicle";
import { brands } from "../../models/brands";
import { AppContext } from "../../context/appContext";

function Carousel() {
  const { state } = useContext(AppContext);

  return (
    <S.Container>
      {brands.map((res, index) => (
        <S.ContainerContent key={index}>
          <S.titleCarousel>{res}</S.titleCarousel>
          <S.SliderContainer>
            {state.vehicles.map((item, index) =>
              brands[item.brand] === res ? (
                <Vehicle
                  brand={item.brand}
                  color={item.color}
                  imgSrc={item.image}
                  combustible={item.combustible}
                  name_model={item.name_model}
                  numberDoors={item.numberDoors}
                  year={item.year}
                  value={item.value}
                  timesTamp={item?.registrationDate}
                  key={index}
                />
              ) : null
            )}
          </S.SliderContainer>
        </S.ContainerContent>
      ))}
    </S.Container>
  );
}

export default memo(Carousel);
