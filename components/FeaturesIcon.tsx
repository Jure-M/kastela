//styles
import { FeaturesIconElement } from "../styles/FeaturesIconElement";

interface Props {
  icon: JSX.Element;
  title: string;
}

const FeaturesIcon: React.FC<Props> = ({ icon, title }) => {
  return (
    <FeaturesIconElement>
      <span>{icon}</span>
      <h3>{title}</h3>
    </FeaturesIconElement>
  );
};

export default FeaturesIcon;
