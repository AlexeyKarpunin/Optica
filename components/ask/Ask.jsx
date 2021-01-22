import styled from 'styled-components'
import Form from './Form';

export default function Ask () {
  return (
    <AskSection>
      <AskContainer>
        <AskQustion>
          <h2>
            Остались 
            <span> вопросы?</span> 
          </h2>
          <p>
            Запишитесь на прием или оставьте заявку
            <br />
            на вызов нашего специалиста, мы поможем вам 
            <br />
            решить ваш вопрос
          </p>
        </AskQustion>
        <Form />
      </AskContainer>
    </AskSection>
  )
}
const AskQustion = styled.div`
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 116.2%;
    color: #1C626B;
    margin: 0;
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

  @media (max-width: 1145px) {
    margin-left: 15px;
  }

`;

const AskSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  height: 905px; 
  background: url(/img/background-form.jpg) no-repeat;
  background-position: center;
  background-size: cover;
`;
const AskContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  padding: 132px 0 0 0;
  @media (max-width: 950px) {
    padding: 0;
  }
`;