import { IVehicleAction, IVehicleState } from "./types";

export const vehicleReducer = (
  state: IVehicleState,
  action: IVehicleAction
): IVehicleState => {
  switch (action.type) {
    case "ADD_VEHICLE":
      const updateVehicles = [...state.vehicles, action.payload];
      localStorage.setItem("vehicles", JSON.stringify(updateVehicles));
      return {
        ...state,
        vehicles: updateVehicles,
      };
    default:
      return state;
  }
};
