//global imports
import Image from "next/image";

// styles
import { HeroContainer } from "../styles/Container";
import { HeroElement } from "../styles/HeroElement";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroElement>
        <h1>Welcome to Apartments Cigulica</h1>
        <Image
          src="/photos/hero.jpg"
          width={900}
          height={600}
          layout="responsive"
        />
      </HeroElement>
    </HeroContainer>
  );
};

export default Hero;
