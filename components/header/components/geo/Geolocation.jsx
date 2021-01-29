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
        <a href='tel:8 (800) 201-06-72'>+7 988 172-87-76</a>
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
  margin-left: 156px;
  justify-content: space-between;
  max-width: 770px;
  flex-grow: 1;

  @media (max-width: 1160px) {
    justify-content: space-evenly;
  }

  @media (max-width: 1020px) {
    margin-left: 0px;
  }

  @media (max-width: 920px) {
    margin-left: 0px;
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

  @media (max-width: 780px) {
    span {
      &:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: 670px) {
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

  @media (max-width: 540px) {
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