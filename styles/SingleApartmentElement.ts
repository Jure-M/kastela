import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
  inverse?: boolean;
}

export const SingleApartmentElement = styled.section<Props>`
  @media ${device.desktop} {
    display: flex;
  }
  & > div {
    flex: 0 0 60%;
    order: ${({ inverse }) => (inverse ? "1" : "0")};
    cursor: pointer;
  }

  .apartment-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media ${device.desktop} {
      flex: 0 0 40%;
      align-items: flex-start;
    }

    h2 {
      margin-bottom: 2rem;
    }

    .features-heading {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.blackLight};
      margin-bottom: 1rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.blackLight};
    }

    .details-container {
      font-family: ${(props) => props.theme.fonts.normal};
      display: flex;
      justify-content: space-between;
      align-self: stretch;
      margin-bottom: 2rem;
    }

    .details-label {
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.gray500};
      margin-bottom: 0.5rem;
    }

    .details-title {
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.black};
      font-weight: 600;
    }

    .details-description {
      margin-bottom: 1rem;
    }
  }
`;
