import styled from 'styled-components';

export default function Wait () {
  return (
    <WaitSection>
      <WaitContainer>
        <WaitInfo>
          <h2>
            Мы ждем Вас
            <br />
            <span>по адресу</span>
          </h2>
          <ul>
            <li> 
              <img style={{width: '19px', height: '25px'}} src='/img/Vector.png' alt='' />
              ул. Боевая, 40
            </li>
            <li>
              <img style={{width: '17px', height: '17px', marginTop: '4px',}} src='/img/call.png' alt='' />
              <a href='tel:+7(988) 172–87–76'>+7(988) 172–87–76</a>
            </li>
            <li>
              <div>
                <img style={{width: '20px', height: '20px', marginTop: '2px',}} src='/img/clock.png' alt='' />
                Время работы:
              </div>
              <span>
                ПН-ПТ: с 9.00 до 18.00, без обеда 
                <br />
                СБ: с 10.00 до 15.00
              </span>
            </li>
          </ul>
          <IMG src='/img/many-glasses.jpg' alt='shop of glasses' />
        </WaitInfo>
      </WaitContainer>
    </WaitSection>
  );
}

const IMG = styled.img`
  position: absolute;
  top: 147px;
  left: 519px;

  @media (max-width: 1175px) {
    left: 405px;
  }

  @media (max-width: 1055px) {
    display: none;
  }
`;

const WaitSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 115px;
  height: 700px;
  // background: url(/img/background-wait.jpg) no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 950px) {
    margin-top: 0;
    height: auto;
    padding-bottom: 50px;
  }
`;
const WaitContainer = styled.div`
  max-width: 1170px;
  padding: 61px 0 0 0;
  margin: 0 auto;
`;

const WaitInfo = styled.div`
  background: rgba(255, 255, 255, 0.83);
  max-width: 967px;
  position: relative;
  padding: 52px 0 15px 97px;

  h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 116.2%;
  color: #1DB9C8;
  margin: 0;
  }

  h2 span {
    font-weight: 400;
    color: #1C626B;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    display: flex;
    align-self: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #1C626B;
    margin: 0 0 30px 0;
    
    &:last-child {
      flex-direction: column;
    }
    &:last-child div {
      display: flex;
    }
  }

  ul li span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 0 31px;
    line-height: 2;
    color: #696767;
  }

  ul li img {
    margin-right: 11px;
  }

  @media (max-width: 410px) {
    padding: 52px 0 15px 10px;
  }
`;