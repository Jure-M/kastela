import styled from "styled-components";
import { device } from "./media";
import { ThemeType } from "./theme";

interface Props {
  theme?: ThemeType;
}

export const HeadingSecondary = styled.h2<Props>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.blackLight};
  @media ${device.tabLand} {
    font-size: 2.6rem;
  }
  @media ${device.tablet} {
    font-size: 3.8rem;
  }
`;

export const HeadingTertiary = styled.h3<Props>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.blackLight};
`;

export const HedingQuatro = styled.h4<Props>`
  font-family: ${(props: Props) => props.theme.fonts.normal};
  color: ${(props: Props) => props.theme.colors.white};
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const Para = styled.p<Props>`
  font-family: ${(props) => props.theme.fonts.normal};
  font-size: 1.8rem;
  line-height: 1.5;
  color: ${(props: Props) => props.theme.colors.black};
  margin-bottom: 1rem;
`;

export const FooterPara = styled.p<Props>`
  font-family: ${(props) => props.theme.fonts.normal};
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${(props: Props) => props.theme.colors.white};
`;

export const Button = styled.button<Props>`
  font-family: ${({ theme }) => theme.colors.display};
  font-size: 1.8rem;
  line-height: 1.4;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  color: ${(props: Props) => props.theme.colors.white};
  background-color: ${(props: Props) => props.theme.colors.blue};
  border: 1px solid ${(props: Props) => props.theme.colors.blue};
  border-radius: 2px;
`;
