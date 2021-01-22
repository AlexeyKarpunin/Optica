import styled from 'styled-components';
import Logo from './geo/Logo';
import LogoText from './geo/LogoText'
import Geolocation from './geo/Geolocation';

export default function Geo () {
  return (
    <GeoContainer>
      <LogoContainer>
        <LogoWrraper>
          <Logo />
          <LogoText />
        </LogoWrraper>
        <Geolocation />
      </LogoContainer>
    </GeoContainer>
  );
}

const LogoWrraper = styled.div`
  display: flex;
`;

const GeoContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;

  @media (max-width: 495px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

