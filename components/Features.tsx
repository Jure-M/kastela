// global imports
import { FaCar, FaWifi } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { GiWoodenFence } from "react-icons/gi";

// styles
import { FeaturesElement } from "../styles/FeaturesElement";
import { HeadingSecondary } from "../styles/TextElements";

// components
import FeaturesIcon from "./FeaturesIcon";
import { HeroContainer } from "../styles/Container";

type ListIconsProps = {
  id: number;
  title: string;
  icon: JSX.Element;
}[];

const featuresData: ListIconsProps = [
  {
    id: 0,
    title: "Kitchen",
    icon: <MdKitchen />,
  },
  {
    id: 1,
    title: "Parking",
    icon: <FaCar />,
  },
  {
    id: 2,
    title: "Balcony",
    icon: <GiWoodenFence />,
  },
  {
    id: 3,
    title: "Wifi",
    icon: <FaWifi />,
  },
];

const listIcons = (featuresData: ListIconsProps) => {
  return featuresData.map(({ id, title, icon }) => (
    <FeaturesIcon key={id} icon={icon} title={title} />
  ));
};

const Features = () => {
  return (
    <HeroContainer>
      <FeaturesElement>
        <div className="features-heading">
          <HeadingSecondary>Home away from home</HeadingSecondary>
        </div>
        <div className="features-container">{listIcons(featuresData)}</div>
      </FeaturesElement>
    </HeroContainer>
  );
};

export default Features;
