//global imports
import React, { useState } from "react";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// styles
import { ImgCarouselElement } from "../styles/ImgCarouselElement";

//data
import { apartmentsData } from "../data/apartments";

interface ImgCarouselProps {
  id: number;
}

const ImgCarousel = ({ id }: ImgCarouselProps) => {
  const gallery = apartmentsData.filter((apartment) => apartment.id === id)[0]
    .photoGallery;

  const [activeIndex, setActiveIndex] = useState(0);
  const length = gallery.length;

  const goLeft = () => {
    if (activeIndex === 0) {
      setActiveIndex(gallery.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goRight = () => {
    if (activeIndex === gallery.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  console.log(gallery);

  return (
    <ImgCarouselElement>
      {gallery.map((image, index) => (
        <div
          key={image}
          className={`slide ${activeIndex === index ? "active" : ""}`}
        >
          <Image src={image} width={300} height={200} layout="responsive" />
        </div>
      ))}
      <BiLeftArrow className="leftArrow" onClick={goLeft} />
      <BiRightArrow className="rightArrow" onClick={goRight} />
    </ImgCarouselElement>
  );
};

export default ImgCarousel;
