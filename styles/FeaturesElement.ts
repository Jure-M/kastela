import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const FeaturesElement = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0rem;

  @media ${device.tablet} {
    justify-content: space-between;
    padding: 1rem 0rem;
  }
  @media ${device.desktop} {
    justify-content: space-between;
    padding: 2rem 0rem;
  }

  h2 {
    max-width: 25rem;
  }

  .features-heading {
    display: none;
    @media ${device.tablet} {
      display: unset;
    }
  }

  .features-container {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
      flex-grow: 0;
      justify-content: space-between;
    }
  }
`;
