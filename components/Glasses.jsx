import styled from 'styled-components'

export default function Glasses () {
  return (
    <>
      <GlassesSection>
        <GlassesContainer>
          <BlockOne>
            <OffersList>
              <h2>Оправы</h2>
              <ul>
                <li>Детские</li>

                <li>Взрослые</li>
              </ul>
            </OffersList>
          </BlockOne>
          <BlockTwo>
            <OffersList>
              <h2>Очки</h2>
              <ul>
                <li>Компьютерные</li>
                <li>Готовые с диоптриями</li>
                <li>Для водителей </li>
                <li>Гладиомные</li>
                <li>Очки-тренажоры </li>
                <li>Солнцезащитные</li>
              </ul>
            </OffersList>
          </BlockTwo>
        </GlassesContainer>
      </GlassesSection>
    </>
)}

const GlassesSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 64px 0 0 0;

  @media (max-width: 950px) {
  padding: 32px 0 50px 0;

  }
`;
const GlassesContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

const BlockOne = styled.div`
  max-width: 570px;
  height: 261px;
  flex-grow: 1;
  background: url(/img/men-child.jpg);

  @media (max-width: 1180px) {
    margin: 0 auto;
    width: 570px;
    margin-bottom: 30px;
  }

  @media (max-width: 585px) {
    width: 400px;
  }

  @media (max-width: 410px) {
    max-width: 400px;
    width: auto;
    margin: 0 0 30px 0;
    flex-grow: 1;
  }

`;

const BlockTwo = styled.div`
  max-width: 570px;
  height: 261px;
  flex-grow: 1;
  background: url(/img/many-glasess.jpg);

  @media (max-width: 1180px) {
    margin: 0 auto;
    width: 570px;
  }

  @media (max-width: 585px) {
    width: 400px;
  }

  @media (max-width: 410px) {
    max-width: 400px;
    width: auto;
    margin: 0;
    flex-grow: 1;
  }

`;

const OffersList = styled.div`
  padding: 0 0 0 15px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #1C626B;
    margin: 20px 0 15px 10px;
  }

  h2 span {
    color: #1C626B;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  ul li {
  position: relative;
  margin-bottom: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #1C8594;
  }

  ul li::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 20px;
    left: -30px;
    bottom: 5px;
    // top: 50%;
    // -webkit-transform: translate(-50%,0);
    // -ms-transform: translate(-50%,0);
    // transform: translate(0, -50%);
    background: rgba(83,200,231,0.5);
}

@media (max-width: 950px) {
  h2 {
    padding: 0 10px;
  }
}

`;
