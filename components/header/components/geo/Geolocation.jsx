import styled from 'styled-components';

export default function Geolocation () {
  return (
    <GeoContainer>
      <City>
        <img src='/img/Vector.png' alt='' style={{height: '25px'}} />
        <span> Астрахань </span>
        <span>ул. Боевая, 14 </span>
      </City>
      <Number>
        <img src='/img/call.png' alt='' />
        <a href='tel:8 (800) 201-06-72'>8 (800) 201-06-72</a>
      </Number>
    </GeoContainer>
  );
}

const GeoContainer = styled.div`
  display: flex;
  margin-left: 156px;
  justify-content: space-between;
  max-width: 770px;
  flex-grow: 1;

  @media (max-width: 1160px) {
    justify-content: space-evenly;
  }

  @media (max-width: 920px) {
    margin-left: 0px;
  }

  @media (max-width: 494px) {
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

  @media (max-width: 744px) {
    span {
      &:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: 635px) {
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