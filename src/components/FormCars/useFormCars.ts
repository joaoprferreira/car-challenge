import { SubmitHandler, useForm } from "react-hook-form";
import { IVehicle } from "../../context/types";
import { validationSchema } from "./validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

interface IUseFormCars {
  onClose: () => void;
}

function useFormCars({ onClose }: IUseFormCars) {
  const { addVehicle } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IVehicle, undefined>({
    resolver: yupResolver(validationSchema),
  });

  const vehicles = JSON.parse(
    localStorage.getItem("vehicles") || "[]"
  ) as IVehicle[];
  const lastVehicle = vehicles[vehicles.length - 1];
  let nextId = 1;
  if (lastVehicle) {
    nextId = (lastVehicle.id !== undefined ? lastVehicle.id : 0) + 1;
  }

  const onSubmit: SubmitHandler<IVehicle> = (data: IVehicle) => {
    addVehicle({
      ...data,
      value: Number(data.value),
      registrationDate: Math.floor(Date.now() / 1000),
      id: nextId,
    });
    onClose();
    toast.success("Veículo cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    reset();
  };

  return { register, handleSubmit, errors, onSubmit };
}

export default useFormCars;
