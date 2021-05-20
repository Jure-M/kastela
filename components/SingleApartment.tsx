// global imports
import { useContext } from "react";
import Image from "next/image";
import { Container } from "../styles/Container";
import { Element } from "react-scroll";

import { AppContext } from "../context/AppContext";

// style
import { SingleApartmentElement } from "../styles/SingleApartmentElement";
import { Button, HeadingSecondary, Para } from "../styles/TextElements";

import { ISingleApartment } from "../data/apartments";

interface ISingleApartmentProps {
  apartment: ISingleApartment;
}

const SingleApartment = ({ apartment }: ISingleApartmentProps) => {
  const { id, imgUrl, title, description, backgroundColor } = apartment;

  const { openModal } = useContext(AppContext);

  const handleClick = () => {
    openModal(id);
  };

  const handleContactBtn = () => {
    openModal("contact");
  };

  return (
    <Element name={title}>
      <div style={{ backgroundColor: backgroundColor, padding: "6rem 0" }}>
        <Container>
          <SingleApartmentElement inverse={id % 2 === 1 ? true : false}>
            <div onClick={handleClick}>
              <Image
                src={imgUrl}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <article className="apartment-description">
              <HeadingSecondary>{title}</HeadingSecondary>
              <p className="features-heading">Key Features:</p>
              <div className="details-container">
                <div>
                  <p className="details-label">Type:</p>
                  <p className="details-title">Apartment</p>
                </div>
                <div>
                  <p className="details-label">Renovated</p>
                  <p className="details-title">2019</p>
                </div>
                <div>
                  <p className="details-label">Floor</p>
                  <p className="details-title">2nd</p>
                </div>
                <div>
                  <p className="details-label">Area</p>
                  <p className="details-title">24sqm</p>
                </div>
              </div>
              <div className="details-description">
                <Para>{description}</Para>
              </div>
              <div className="icons-container"></div>
              <Button onClick={handleContactBtn}>Contact us</Button>
            </article>
          </SingleApartmentElement>
        </Container>
      </div>
    </Element>
  );
};

export default SingleApartment;
