//style
import { ReviewElement } from "../styles/ReviewElement";
import { Para } from "../styles/TextElements";

// data
import { IReview } from "../data/reviews";

const Review = ({ desc, apartment, name }: IReview) => {
  return (
    <ReviewElement>
      <Para>{desc}</Para>
      <span>
        {apartment} - "{name}"
      </span>
    </ReviewElement>
  );
};

export default Review;
