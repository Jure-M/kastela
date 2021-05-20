import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const FeaturesIconElement = styled.div`
  text-align: center;
  padding: 1rem;

  @media ${device.tablet} {
    margin-left: 2rem;
  }

  @media ${device.tabLand} {
    margin-left: 3rem;
  }

  span {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.blackLight};

    @media ${device.tablet} {
      font-size: 4.5rem;
    }
    @media ${device.tabLand} {
      font-size: 6rem;
    }
  }
`;
