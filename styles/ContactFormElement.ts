import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme?: ThemeType;
}

export const ContactFormElement = styled.div<Props>`
  background-color: ${(props: Props) => props.theme.colors.white};
  border-radius: 3px;
  padding: 2rem;

  @media ${device.tablet} {
    padding: 4rem;
  }

  @media ${device.tabLand} {
    width: 60vw;
    padding: 6rem;
  }

  h2 {
    margin-bottom: 3rem;
  }
  .form-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  .form-control {
    position: relative;
    flex-direction: column;
    flex: 0 0 100%;
    margin-bottom: 2rem;

    @media ${device.tabLand} {
      flex: 0 0 48%;
      margin-bottom: 2rem;
    }

    &.wide {
      flex: 0 0 100%;
    }
    label {
      color: ${(props) => props.theme.colors.gray300};
      position: absolute;
      font-size: 2.2rem;
      margin-bottom: 1rem;
      top: 50%;
      transform: translateY(-50%);
      left: 0.5rem;
      transition: all 0.3s ease-in-out;
    }
    input {
      width: 100%;
      font-size: 2.2rem;
      padding: 1.2rem 1.2rem;
      margin: 0.5rem 0;
      color: ${(props) => props.theme.colors.blackLight};
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.gray400};

      &:focus {
        outline: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.blue};
      }

      &:focus + label,
      &:not([value=""]) + label {
        top: 0%;
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.blue};
      }
    }

    .error {
      color: red;
      font-size: 1.4rem;
    }
  }
  .api-error {
    color: red;
    font-size: 1.6rem;
    padding: 0.5rem;
    margin-bottom: 2rem;
    border-radius: 4px;
    border: 1px solid currentColor;
  }
`;
