import styled from 'styled-components';
import Geo from './components/Geo';
import Navigation from './components/Navigation'; 

export default function Header () {
  return (
    <Head>
      <Geo />
      <Navigation />
    </Head>
  )
}


const Head = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  @media (min-width: 1021px) {
    position: sticky;
    top: -55px;
    z-index: 100;
  }
`;
