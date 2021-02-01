import styled from 'styled-components';

export default function Choose () {
  return (
    <AboutComponiSection>
      <AboutComponiContainer>
        <InfoWrraper>
          <h1>
            Огромный выбор 
            <br />
            <span>оправ</span> 
          </h1>
          <p>
            Оптика КМ предоставляет услуги мастерской по изготовлению очков для зрения по Вашему рецепту, а также по установке или замене линз в оправе заказчика
          </p>
          <p>Наличия необходимых для изготовления комплектующих (в некоторых случаях требуется поставка комплектующих со склада в Москве).</p>
        </InfoWrraper>
        <ImgWrraper>
          <img src='/img/making/w-and-m.jpg' alt='' />
        </ImgWrraper>
      </AboutComponiContainer>
    </AboutComponiSection>
  );
}

const AboutComponiSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 45px 0 0 0;
`;

const AboutComponiContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  padding: 75px 0 100px 0px;

  @media (max-width: 1170px) {
    flex-direction: column-reverse;
  }
`;

const InfoWrraper = styled.div`


  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #1DB9C8;
    span {
    color: #1C626B;
    font-weight: 400;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #1C8594;
  }

  @media (max-width: 1170px) {
    margin: 0 auto;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    h1 {
      text-align: center;
    }

    p {
      padding: 0 0 0 5px;
    }
  }
`;


const ImgWrraper = styled.div`
  padding: 0 62px 0 0;
  position: relative;

  img {
    &:nth-child(2) {
      position: absolute;
      top: -42px;
      right: -63px;
      z-index: -1;

      @media (max-width: 1300px) {
        display: none;
      }
    }
  }

  @media (max-width: 1170px) {
    max-width: 600px;
    margin: 0 auto;
    padding: 0;
  }

  @media (max-width: 600px) {
    img {
      &:nth-child(1) {
        width: 280px;
      }
    }
  }
`;