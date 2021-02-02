import styled from 'styled-components';

export default function info() {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoWrraper>
          <h1>
            Диагностика
            {' '}
            <span>зрения</span>
          </h1>
          {/* <p>Проведем тщательное и максимально объективное обследование Вашей зрительной системы и обеспечим точную постановку диагноза даже на самых ранних стадиях развития заболевания. Только такой подход станет залогом правильного и по-настоящему эффективного лечения!</p> */}
          <p>Хорошее зрение – важная составляющая жизнедеятельности человека. Мы сделаем всё, чтобы процесс подбора очков был комфортным для Вас, начиная от проверки зрения и заканчивая выбором и покупкой продукции.</p>
          <p>Благодаря использованию новейшего оборудования в салоне...компьютерная диагностика пройдёт максимально быстро и комфортно. </p>
          <p>Обследование проходит на современном устройстве, укомплектованном в соответствии с мировыми стандартами, что позволяет выяснить, линзы (очковые или контактные) какой оптической силы обеспечат наиболее четкое и комфортное зрение.</p>
          <p>Наши оптометристы подберут идеальные очки как взрослым, так и и детям.</p>
        </InfoWrraper>
        <ImgWrraper>
          <img src='/img/selection-of-lenses/check-eyes.jpg' alt='women' />
          <img src='/img/about-componi/modal-back.png' alt='' />
        </ImgWrraper>
      </InfoContainer>
    </InfoSection>
  );
}

const InfoSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
`;

const InfoContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  padding: 75px 0 100px 0px;

  @media (max-width: 1170px) {
    flex-direction: column-reverse;
  }
`;

const InfoWrraper = styled.div`


  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #1C626B;

    span {
      color: #1DB9C8;
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
  padding: 0 0 0 37px;
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