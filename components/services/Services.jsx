import styled from 'styled-components';
import List from './components/List';
import Serviceinfo from './components/ServiceInfo';

export default function Services () {
  return(
    <ServicesSection>
      <ServicesContainer>
        <Serviceinfo />
        <List />
      </ServicesContainer>
    </ServicesSection>
  );
}

const ServicesSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;

  background-position: center;
  background-size: cover;
`;
const ServicesContainer = styled.div`
  max-width: 1170px;
  padding-top: 0px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;