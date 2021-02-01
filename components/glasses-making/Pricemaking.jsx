import styled from 'styled-components';


export default function PriceMaking() {
  return (
    <PriceMakingSection>
      <PriceMakingContainer>
        <h1>
          Стоимость
          {' '}
          <span>изготовления</span>
        </h1>
        <p>
          Стоимость изготовления очков складывается из
          <br />
          стоимости комплектующих и работ
        </p>
        <Colculation>
          <ImgBox text='Цена очков' link='/img/making/glasses1.png' />
          <Math>=</Math>
          <ImgBox text='Оправа' link='/img/making/glasses3.png' />
          <Math>+</Math>
          <ImgBox text='Пары линз' link='/img/making/linses.png' />
          <Math>+</Math>
          <ImgBox text='Установки линз' link='/img/making/glasses2.png' />
        </Colculation>
      </PriceMakingContainer>
    </PriceMakingSection>
  );
}

const PriceMakingSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
`;
const PriceMakingContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #1C626B;
    span {
      color: #1DB9C8;
      font-weight: bold;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #1C8594;
  }
  @media (max-width: 1160px) {
    h1 {text-align: center}
    p {text-align: center}
  }

  @media (max-width: 600px) {
    h1 {font-size: 44px;}
  }
`;

const Colculation = styled.div`
  display: flex;
  @media (max-width: 1160px) {
    flex-direction: column;
  }
`;

const Math = styled.div`
  align-self: center;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 112px;
  color: #1BC8D8;
  margin: 0 8px;
`;


function ImgBox ({text, link}) {
  return (
    <ImgWrraper>
      <img src={link} alt='' />
      <span>{text}</span>
    </ImgWrraper>
  )
}

const ImgWrraper = styled.div`
  position: relative;
  width: 238px;
  span {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #1C626B;
    white-space: nowrap;
  }

  @media (max-width: 1160px) {
    margin: 0 auto;
  }
`;