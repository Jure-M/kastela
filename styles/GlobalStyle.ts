import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Playfair+Display&family=Port+Lligat+Sans&display=swap");
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.gray100};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
