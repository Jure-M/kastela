import styled from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme?: ThemeType;
}

export const FooterElement = styled.footer<Props>`
  display: flex;
  justify-content: space-between;
  padding-top: 7rem;
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;
