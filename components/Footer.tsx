//styles
import { Container } from "../styles/Container";
import { FooterElement } from "../styles/FooterElement";
import { HedingQuatro, FooterPara } from "../styles/TextElements";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#4e4e4e" }}>
      <Container>
        <FooterElement>
          <div>
            <HedingQuatro>Adress:</HedingQuatro>
            <FooterPara>Put Cigulice 7, Kastel Kambelovac</FooterPara>
            <HedingQuatro>Phone:</HedingQuatro>
            <FooterPara>+385911155715</FooterPara>
            <HedingQuatro>Wats Up:</HedingQuatro>
            <FooterPara>+385911155715</FooterPara>
            <HedingQuatro>Email:</HedingQuatro>
            <FooterPara>apartman.natasa@gmail.com</FooterPara>
          </div>
        </FooterElement>
      </Container>
    </div>
  );
};

export default Footer;
