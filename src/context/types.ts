export interface IVehicle {
  id: number;
  image?: string;
  registrationDate: number;
  model_id?: number;
  year: number;
  combustible: string;
  numberDoors: number;
  color: string;
  name_model: string;
  value: number;
  brand: number;
}

export interface IVehicleState {
  vehicles: IVehicle[];
}

export interface IVehicleAction {
  type: string;
  payload: IVehicle;
}
