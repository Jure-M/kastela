import styled from "styled-components";
import { ThemeType } from "./theme";
import { device } from "./media";

interface Props {
  theme: ThemeType;
  isOpen: boolean;
}

export const ModalElement = styled.div<Props>`
  position: fixed;
  background-color: gray;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  border-radius: 2px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  z-index: 15;
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
  @media ${device.tabLand} {
    width: 60vw;
  }
`;
