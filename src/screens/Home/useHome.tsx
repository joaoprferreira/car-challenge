import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";

export function useHome() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { state } = useContext(AppContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { openModal, closeModal, isModalOpen, state };
}
