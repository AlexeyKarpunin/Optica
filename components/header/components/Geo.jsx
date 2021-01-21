import styled from 'styled-components';
import Logo from './geo/Logo';
import LogoText from './geo/LogoText'
import Geolocation from './geo/Geolocation';

export default function Geo () {
  return (
    <GeoContainer>
      <LogoContainer>
        <Logo />
        {/* <img src='/img/logo.png' alt='logo' /> */}
        <LogoText />
        <Geolocation />
      </LogoContainer>
    </GeoContainer>
  );
}

const GeoContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  // img {
  //   height: 62px;
  //   width: 45px;
  //   margin: 8px 0 0 0;
  // }
`;

