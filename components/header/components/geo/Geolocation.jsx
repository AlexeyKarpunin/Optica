import styled from 'styled-components';

export default function Geolocation () {
  return (
    <GeoContainer>
      <City>
        <img src='/img/Vector.png' alt='' style={{height: '25px'}} />
        <span> Астрахань </span>
        <span>ул.Боевая, 40 </span>
      </City>
      <Number>
        <img src='/img/call.png' alt='' />
        <a href='tel: +7 988 172-87-76'>+7 988 172-87-76</a>
        <InstWrapper href='https://www.instagram.com/topaloff_optica/?hl=ru' target='_blank'><img src='/img/inst.png' alt='instagram' /></InstWrapper>
      </Number>
    </GeoContainer>
  );
}

const InstWrapper = styled.a`
   margin: 1px 0 0 10px ;
   cursor: pointer;

`;

const GeoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 770px;
  flex-grow: 1;

  @media (max-width: 1020px) {
    justify-content: center;
  }

  @media (max-width: 540px) {
    margin: 0 auto;
  }
`;

const City = styled.div`
  align-self: center;
  display: flex;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #8F8F8F;
    margin-left: 11px;
  }

  @media (max-width: 1020px) {
    span {
      &:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: 1020px) {
    span {
      display: none;
    }

    img {
      display: none;
    }
  }
`;
const Number = styled.div`
  align-self: center;
  display: flex;

  @media (max-width: 630px) {
    margin: 0 0 0 25px;
  }

  a {
    margin-left 11px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #696767;
  }
  
  img {
    width: 17px;
    height: 17px;
    align-self: center;
  }
`;