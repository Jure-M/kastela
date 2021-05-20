//global imports
import { useContext } from "react";
import { FaBars } from "react-icons/fa";

//styles
import { Logo } from "../styles/Logo";
import { NavBarElement } from "../styles/NavBarElement";

//components
import MainNav from "./MainNav";

//context
import { AppContext } from "../context/AppContext";

const NavBar: React.FC = () => {
  const { openSide } = useContext(AppContext);

  return (
    <NavBarElement>
      <Logo> Cigulica. </Logo>
      <div className="nav">
        <MainNav inline />
      </div>
      <div className="icon" onClick={openSide}>
        <FaBars />
      </div>
    </NavBarElement>
  );
};

export default NavBar;
