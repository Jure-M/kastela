import styled from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
  isOpen: boolean;
}

export const OverlayElement = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray400};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  opacity: ${(props) => (props.isOpen ? "0.8" : "0")};
  z-index: ${(props) => (props.isOpen ? "14" : "-1")};
  transition: all 0.5s;
`;
