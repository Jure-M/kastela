import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const Logo = styled.div<Props>`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  font-size: 3rem;

  @media ${device.tabLand} {
    font-size: 3.5rem;
  }
  @media ${device.desktop} {
    font-size: 4.2rem;
  }
`;
