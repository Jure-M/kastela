// globals
import { useContext } from "react";
import { Link } from "react-scroll";

// styles
import { MainNavElement } from "../styles/MainNavElement";
import { Button } from "../styles/TextElements";

//context
import { AppContext } from "../context/AppContext";

interface IMainNavProps {
  inline?: boolean;
}

const MainNav: React.FC<IMainNavProps> = (props) => {
  const { isSideOpen, closeSide, openModal } = useContext(AppContext);

  const handleLinkClick = () => {
    if (isSideOpen) closeSide();
  };

  const handleButtonClick = () => {
    if (isSideOpen) closeSide();
    openModal("form");
  };

  return (
    <MainNavElement inline={props.inline}>
      <ul>
        <li>
          <Link
            to="Modern Apartment"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            onClick={handleLinkClick}
          >
            Modern
          </Link>
        </li>
        <li>
          <Link
            to="Stylish Studio"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            onClick={handleLinkClick}
          >
            Stylish Studio
          </Link>
        </li>
        <li>
          <Link
            to="Green Vibes"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            onClick={handleLinkClick}
          >
            Green Vibes
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={150}
            onClick={handleLinkClick}
          >
            Reviews
          </Link>
        </li>
        <Button onClick={handleButtonClick}>Contact us</Button>
      </ul>
    </MainNavElement>
  );
};

export default MainNav;
