//globals
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

//styles
import { MobileNavSlideElement } from "../styles/MobileNavSlideElement";
import MainNav from "./MainNav";

// context
import { AppContext } from "../context/AppContext";

const MobileNavSlide = () => {
  const { closeSide } = useContext(AppContext);
  return (
    <MobileNavSlideElement>
      <div className="icon" onClick={closeSide}>
        <AiOutlineClose />
      </div>
      <MainNav />
    </MobileNavSlideElement>
  );
};

export default MobileNavSlide;
