import React, { createContext, useState, ReactNode } from "react";

const initialState = {
  isSideOpen: false,
  isOverlayOpen: false,
  isModalOpen: false,
  modalContent: null,
  openSide: () => {},
  closeSide: () => {},
  openModal: (type: string | number) => {},
  closeModal: () => {},
  handleOverlayClick: () => {},
};

type IContext = typeof initialState;

export const AppContext = createContext<IContext>(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isOverlayOpen, setisOverlayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | number>(null);

  const openSide = () => {
    setisOverlayOpen(true);
    setIsSideOpen(true);
  };

  const closeSide = () => {
    setisOverlayOpen(false);
    setIsSideOpen(false);
  };

  const openModal = (type: string | number) => {
    setModalContent(type);
    setIsModalOpen(true);
    setisOverlayOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setisOverlayOpen(false);
  };

  const handleOverlayClick = () => {
    setisOverlayOpen(false);
    isModalOpen ? setIsModalOpen(false) : null;
    isSideOpen ? setIsSideOpen(false) : null;
  };

  return (
    <AppContext.Provider
      value={{
        isSideOpen,
        isOverlayOpen,
        isModalOpen,
        modalContent,
        openModal,
        closeModal,
        openSide,
        closeSide,
        handleOverlayClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
