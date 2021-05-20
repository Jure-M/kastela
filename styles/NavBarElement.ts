import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const NavBarElement = styled.div<Props>`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  font-size: 2.5rem;

  @media ${device.tablet} {
    height: 7rem;
  }

  .nav {
    display: none;
    @media ${device.tabLand} {
      display: unset;
    }
  }

  .icon {
    color: ${({ theme }) => theme.colors.black};
    @media ${device.tabLand} {
      display: none;
    }
  }
`;
