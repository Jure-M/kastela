// global imports
import { useContext } from "react";

//styles
import { OverlayElement } from "../styles/OverlayElement";

//context
import { AppContext } from "../context/AppContext";

const Overlay = () => {
  const { isOverlayOpen, handleOverlayClick } = useContext(AppContext);

  return (
    <OverlayElement
      isOpen={isOverlayOpen}
      onClick={handleOverlayClick}
    ></OverlayElement>
  );
};

export default Overlay;
