import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}
export const HeroElement = styled.div<Props>`
  position: relative;
  margin-top: 2rem;
  h1 {
    position: absolute;
    z-index: 2;
    top: 3vh;
    left: 3vw;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.blackLight};
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 300;

    @media ${device.tablet} {
      font-size: 4.2rem;
      max-width: 25rem;
    }

    @media ${device.desktop} {
      font-size: 5.2rem;
      max-width: 30rem;
    }
  }
`;
