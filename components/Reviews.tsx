// global imports
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Element } from "react-scroll";

//style
import { ReviewsElement, ReviewsSlider } from "../styles/ReviewsElement";
import { HeadingSecondary } from "../styles/TextElements";

//components
import Review from "./Review";

// data
import { reviews } from "../data/reviews";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const reviewsLength = reviews.length;

  const handlePrev = () => {
    setActiveIndex((index) => {
      if (index === 0) {
        return reviewsLength - 1;
      } else {
        return index - 1;
      }
    });
  };

  const handleNext = () => {
    setActiveIndex((index) => {
      if (index === reviewsLength - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  return (
    <Element name="reviews">
      <ReviewsElement>
        <div className="reviews-section">
          <HeadingSecondary>What guests say about us</HeadingSecondary>
          <ReviewsSlider>
            <div className="forward">
              <IoIosArrowForward onClick={handleNext} />
            </div>
            {reviews.map(({ id, desc, apartment, name }, i) => {
              let position = "";
              if (i === activeIndex) {
                position = "active";
              }
              if (
                activeIndex + 1 === i ||
                (activeIndex === reviewsLength - 1 && i === 0)
              ) {
                position = "nextSlide";
              }
              if (
                activeIndex - 1 === i ||
                (activeIndex === 0 && i === reviewsLength - 1)
              ) {
                position = "prevSlide";
              }
              return (
                <div key={id} className={`slide ${position}`}>
                  <Review
                    id={id}
                    desc={desc}
                    apartment={apartment}
                    name={name}
                  />
                </div>
              );
            })}
            <div className="back">
              <IoIosArrowBack onClick={handlePrev} />
            </div>
          </ReviewsSlider>
        </div>
        <div className="reviews-image">
          <Image
            src="/photos/reviews/review_modern.jpg"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
      </ReviewsElement>
    </Element>
  );
};

export default Reviews;
