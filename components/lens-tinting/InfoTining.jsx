import styled from 'styled-components';

export default function info() {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoWrraper>
          <h1>
            Тонировка 
            {' '}
            <span>Линз</span>
          </h1>
          <p>Центр оптической коррекции «Topaloff» предлагает услугу тонировки линз. Все очковые линзы в нашем ассортименте можно окрасить в любой цвет с разной интенсивностью в соответствии с Вашим стилем.</p>
          <p>Цветные линзы сделают жизнь более яркой, а темно-насыщенные цвета, предоставят Вам превосходную защиту от солнца.</p>
        </InfoWrraper>
        <ImgWrraper>
          <img src='/img/lens-tinting/eye.jpg' alt='eye' />
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