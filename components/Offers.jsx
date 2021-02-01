import styled from 'styled-components';
import DefButton from './DefButton';

export default function Offers () {
 
  return (
    <OffersSection>
      <OffersContainer>
        <OffersVideo>
          <VidioBox>
            <img src='/img/play.png' alt='play' />
          </VidioBox>
          <DefButton 
            text='Записаться на прием'
            styles='padding: 23px 40px;margin-top: 90px;
            box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);
            filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));
            '
          />
        </OffersVideo>
        <OffersList>
          <h2> 
            Что мы предлагаем
            <br />
            <span>своим клиентам</span>
          </h2>
          <ul>
            <li>изготовление очков за 3 часа</li>
            <li>определение остроты зрения</li>
            <li>подбор сложных и простых коррекционных очков</li>
            <li>
              помощь в подборе мягких контактных линз, а также
              <br />
              цветных линз
            </li>
            <li>осуществление индивидуальных заказов</li>
            <li>помощь в подборе брендовых имиджевых оправ</li>
            <li>
              подбор корейских очковых линз CRYOL RX
            </li>
            <li>
              подбор прогрессивных очковых линз, три зоны в одних
              <br />
              очках
            </li>
            <li>
              подбор фотохромных, окрашенных линз, а также линз
              <br />
              для работы за компьютером и для автомобилистов
            </li>
            <li>подбор детских очков и многое др</li>
          </ul>
        </OffersList>
      </OffersContainer>
    </OffersSection>
  );
}

const VidioBox = styled.div`
  width: 600px;
  height: 433px;
  margin-right: 78px;
  position: relative;
  background: url(/img/checking-see.jpg);
  img {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }

  @media (max-width: 605px) {
    width: 400px;
    height: 233px;
    margin: 0 auto;
  }

  @media (max-width: 410px) {
     width: 275px; 
     height: 180px; 
  }
`;

const OffersSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  margin-top: 139px;

  @media (max-width: 950px) {
    background: url(/img/background-offers.jpg) no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
const OffersContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;
const OffersVideo = styled.div`
  @media (max-width: 605px) {
    text-align: center;
  }
`;
const OffersList = styled.div`
  h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 116.2%;
  color: #1DB9C8;
  margin: 0;
  margin-top: -40px;
  }

  h2 span {
    color: #1C626B;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  ul li {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #1C8594;
  position: relative;
  margin-bottom: 10px;
  }

  ul li::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 20px;
    left: -30px;
    top: 50%;
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(0, -50%);
    background: rgba(83,200,231,0.5);
}

@media (max-width: 950px) {
  h2 {
    padding: 0 10px;
  }
}

`;