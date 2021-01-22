import styled from 'styled-components';
import Logo from './components/Logo';
import Goods from './components/Goods';
import Services from './components/Services';
import Info from './components/Info';

export default function Footer () {
  return (
    <FooterSection>
      <FooterContainer>
        <Logo />
        <Goods />
        <Services />
        <Info />
      </FooterContainer>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  max-width: 1920px;
  margin: 0 auto;
  background: linear-gradient(90.54deg, #3CD0DD 0.05%, #20C3D2 0.06%, #49C4E4 100%);
`;
const FooterContainer = styled.div`
  max-width: 1028px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 47px 0 0 0;

  @media (max-width: 1124px) {
    padding: 200px 0 0 0;
  }

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    padding: 200px 15px 0 15px;
  }

  @media (max-width: 590px) {
    padding: 250px 15px 15px 15px;
  }

  @media (max-width: 410px) {
    padding: 320px 15px 15px 15px;
  }

  @media (max-width: 385px) {
    flex-direction: column;
  }
`;


