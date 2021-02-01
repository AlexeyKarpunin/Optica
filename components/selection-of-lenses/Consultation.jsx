import styled from 'styled-components'
import DefButton from '../DefButton';

export default function Consultation () {
  return (
    <ConsSection>
      <ConsContainer>
        <Info>
          <h2>Предварительная консультация:</h2>
          <p>
            На любые Ваши вопросы мы с радостью ответим по телефону 
            {' '}
            <br />
            <a href='tel:8 (800) 201-06-72'>8 (800) 201-06-72</a>  
            {' '}
            <br />
            или в нашем салоне оптики по адресу   
            {' '}
            <br />
            г. Астрахань, ул. Боевая, 14  
            {' '}
            <br />
          </p>
          <DefButton text='Заказать звонок' styles='padding: 18px 40px; box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2); filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));' />
        </Info>
      </ConsContainer>
    </ConsSection>
  )
}

const ConsSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
`;

const ConsContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const Info = styled.div`
   background: url(/img/consultation/women-with-glases.jpg) no-repeat;
   background-size: cover;
   padding: 10px 0 57px 62px;
   margin-bottom: 100px;

   h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #1C626B;
   }

   p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #1C8594;
    a {
      color: #1C626B;
      font-weight: bold;
     }
   }

   @media( max-width: 380px) {
    padding: 10px 0 57px 0;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-size: 32px;
    }
   }
`;