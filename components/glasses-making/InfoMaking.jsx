import styled from 'styled-components';

export default function info() {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoWrraper>
          <h1>
            Изготовление  
            {' '}
            <span>очков</span>
          </h1>
          <p>Центр оптической коррекции «Topaloff» предоставляет услуги мастерской по изготовлению очков, а также по установке или замене линз в оправе заказчика</p>
          <Data>
            <h2> 
              Сроки изотовления зависят от:
            </h2>
            <ul>
              <li>Сложности работ</li>
              <li>
                Наличия необходимых для изготовления
                <br />
                комплектующих (в некоторых случаях требуется 
                {' '}
                <br />
                поставка комплектующих со склада в Москве).
              </li>
            </ul>
          </Data>

        </InfoWrraper>
        <ImgWrraper>
          <img src='/img/making/words.jpg' alt='words' />
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
  padding: 75px 0 40px 0px;

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
      font-size: 44px;
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

const Data = styled.div`

h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1C626B;
  margin: 0;
  }

  ul {
    list-style: none;
  }

  ul li {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #1C8594;
  position: relative;
  margin-bottom: 15px;
  }

  ul li::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 15px;
    left: -30px;
    top: 3px;
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