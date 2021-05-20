import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const ReviewsElement = styled.section<Props>`
  display: flex;
  background-color: "#d7d7d7";

  .reviews-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;

    @media ${device.tabLand} {
      padding: 6rem 3rem;
    }

    @media ${device.desktop} {
      padding: 8rem 5rem;
    }

    h2 {
      margin-bottom: 3rem;
    }
  }

  .reviews-image {
    flex: 1 0 50%;
    display: none;
    @media ${device.desktop} {
      display: block;
    }
  }
`;

export const ReviewsSlider = styled.div<Props>`
  position: relative;
  width: 100%;
  overflow: hidden;
  .back {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    position: absolute;
    color: ${(props) => props.theme.colors.black};
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 7;
  }
  .forward {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    position: absolute;
    color: ${(props) => props.theme.colors.black};
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 7;
  }
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    opacity: 0;
    z-index: 5;
    transition: all 0.7s ease-in-out;
  }
  .slide.active {
    opacity: 1;
    position: relative;
  }
  .slide.prevSlide {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide.nextSlide {
    transform: translateX(100%);
    opacity: 0;
  }
`;
