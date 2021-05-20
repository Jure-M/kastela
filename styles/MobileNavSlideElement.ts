import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const MobileNavSlideElement = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100vh;
  background: ${(props) => props.theme.colors.gray200};
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;

  &.nav-enter {
    transform: translateX(100%);
  }
  &.nav-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  &.nav-exit {
    transform: translateX(0%);
  }
  &.nav-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }

  .icon {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 3rem;
  }
`;
