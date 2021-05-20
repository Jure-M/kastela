//global imports
import { useContext } from "react";

// styles
import { ModalElement } from "../styles/ModalElement";

//components
import ImgCarousel from "./ImgCarousel";
import ContactForm from "./ContactForm";

//context
import { AppContext } from "../context/AppContext";

const Modal = () => {
  const { isModalOpen, modalContent } = useContext(AppContext);

  const modalBody = () => {
    if (typeof modalContent === "number") {
      return <ImgCarousel id={modalContent} />;
    } else return <ContactForm />;
  };

  return <ModalElement isOpen={isModalOpen}>{modalBody()}</ModalElement>;
};

export default Modal;
