import React, { ReactNode, createContext, useEffect, useReducer } from "react";
import { vehicleReducer } from "./appReducer";
import { IVehicle, IVehicleState } from "./types";
import data from "../cars_by_brand.json";

export const AppContext = createContext<{
  state: IVehicleState;
  addVehicle: (vehicle: IVehicle) => void;
}>({ state: { vehicles: [] }, addVehicle: () => {} });

const initialState = {
  vehicles: JSON.parse(localStorage.getItem("vehicles") || "[]") as IVehicle[],
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(vehicleReducer, initialState);

  const addVehicle = (vehicle: IVehicle) => {
    dispatch({ type: "ADD_VEHICLE", payload: vehicle });
  };

  useEffect(() => {
    const storedVehicles = JSON.parse(
      localStorage.getItem("vehicles") || "[]"
    ) as IVehicle[];

    data.cars.filter((item) => {
      const existsInLocalStorage = storedVehicles.some(
        (storedVehicle) => storedVehicle.id === item.id
      );

      if (!existsInLocalStorage) {
        dispatch({
          type: "ADD_VEHICLE",
          payload: {
            brand: item.brand - 1,
            color: item.cor,
            combustible: item.combustivel,
            name_model: item.nome_modelo,
            numberDoors: item.num_portas,
            registrationDate: item.timestamp_cadastro,
            value: item.valor,
            model_id: item.modelo_id,
            id: item.id,
            year: item.ano,
          },
        });
      }
      return !existsInLocalStorage;
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, addVehicle }}>
      {children}
    </AppContext.Provider>
  );
};
