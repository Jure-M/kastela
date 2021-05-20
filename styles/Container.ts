import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media ${device.tabLand} {
    max-width: 120rem;
  }
`;

export const HeroContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  @media ${device.tabLand} {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;
