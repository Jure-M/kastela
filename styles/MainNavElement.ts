import styled from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
  inline?: boolean;
}

export const MainNavElement = styled.nav<Props>`
  ul {
    display: flex;
    align-items: center;
    flex-direction: ${({ inline }) => (inline ? "row" : "column")};
    li {
      font-family: ${({ theme }) => theme.fonts.display};
      font-size: ${({ inline }) => (inline ? "2rem" : "3rem")};
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.blackLight};
      cursor: pointer;
      margin-right: ${({ inline }) => (inline ? "2rem" : "0")};
      margin-bottom: ${({ inline }) => (inline ? "0" : "4rem")};
      border-bottom: 0.5rem;
    }
    .active {
      color: ${({ theme }) => theme.colors.blue};
    }

    li:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
