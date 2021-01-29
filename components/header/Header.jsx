import styled from 'styled-components';
import Geo from './components/Geo';
import Navigation from './components/Navigation'; 

export default function Header ({activeLink}) {
  return (
    <Head>
      <Geo />
      <Navigation activeLink={activeLink} />
    </Head>
  )
}


const Head = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  @media (min-width: 1021px) {
    position: sticky;
    top: -60px;
    z-index: 100;
  }
`;
