import styled from 'styled-components'

export default function Serviceinfo () {
  return (
    <InfoContainer>
      <HeadLine>
        <h2>
          Какие услуги
          <br />
          <span>мы оказываем</span>
        </h2>
        <p>  
          Наш салон является одним из 
          <br />
          лидирующих по подбору линз 
          <br />
          и оправ для лучшего зрения
        </p>
      </HeadLine>

      <Service>
        <div>
          <img style={{width: '90px', height: '90px'}} src='/img/clock.png' alt='clock' />
        </div>
        <p>
          Изготовление очков 
          <br />
          за 3 часа
        </p>
      </Service> 

      <Service>
        <div>
          <img style={{width: '72px', height: '82px'}} src='/img/portrait.png' alt='portrait' />
        </div>
        <p>
          Опытные 
          {' '}
          <br />
          {' '}
          специалисты
        </p>
      </Service> 

      <Service>
        <div>
          <img style={{width: '97px', height: '83px'}} src='/img/zero.png' alt='zero' />
        </div>
        <p>
          Бесплатная
          <br />
          консультация
        </p>
      </Service>   
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  min-width: 390px;

  @media (max-width: 1250px) {
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    min-width: 280px;
    padding: 0 10px;
  }

  @media (max-width: 295px) {
    padding: 0;
  }
`;

const HeadLine = styled.div`
  margin-bottom: 67px;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    color: #3F3F3F;
    margin: 10px 0 0 0;
    span {
      color: #1DB9C8;
      font-weight: bold;
    }
  }

  p {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #1C8594;
  }
`;

const Service = styled.div`
  margin-top: 25px;
  display: flex;
  p {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 130%;
  color: #1C8594;
  margin: 0 0 0 18px;
  align-self: center;
  }
  div {
    width: 100px;
  }
`;