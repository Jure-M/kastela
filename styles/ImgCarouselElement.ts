import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}
export const ImgCarouselElement = styled.div<Props>`
  position: relative;
  width: 100vw;

  @media ${device.tabLand} {
    width: 60vw;
  }

  .slide {
    display: none;
    &.active {
      display: block;
    }
  }

  .leftArrow,
  .rightArrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 4rem;
    color: ${(props) => props.theme.colors.gray400};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.gray300};
    }
  }

  .leftArrow {
    left: 2rem;
  }

  .rightArrow {
    right: 2rem;
  }
`;
