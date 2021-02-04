import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DefButton from '../DefButton';
import Form from '../ask/Form';

export default function Consultation () {

  const [formStatus, setFormStatus] = useState('hidden');
  const sendStatusForm = useSelector( (state) => state.form.formStatus);

  function makeAnAppointment (e) {
    e.preventDefault();
    setFormStatus('active')
  }

  useEffect( () => {
    if (sendStatusForm === 'send') setTimeout( () => setFormStatus('hidden'), 3500) ;
  }, [sendStatusForm])

  return (
    <ConsSection>
      <ConsContainer>
        <Info>
          <h2>Предварительная консультация:</h2>
          <p>
            На любые Ваши вопросы мы с радостью ответим по телефону 
            {' '}
            <br />
            <a href='tel:+7 988 172-87-76'>+7 988 172-87-76</a>  
            {' '}
            <br />
            или в нашем салоне оптики по адресу   
            {' '}
            <br />
            г. Астрахань, ул.Боевая, 40  
            {' '}
            <br />
          </p>
          <DefButton 
            text='Записаться на бесплатную консультацию' 
            styles='padding: 18px 40px; box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2); filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15)); @media(max-width: 480px){ max-width: 270px;}'
            onClickFunc={makeAnAppointment}
          />
        </Info>
        <Hidden status={formStatus}>
          <Form />
        </Hidden>
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

const Hidden = styled.div`
overflow: hidden;
padding: 10px 0 57px 62px;
margin-top: ${props => props.status === 'active' ? '0' : '-680px;'}
transition: 2s; 

form {
  position: inherit;
  transform: ${props => props.status === 'active' ? 'translateY(0px);' : 'translateY(-900px);'}
  transition: 2s; 
  
  h2 {
    font-size: 32px;
  }

  img {
    display: none;
  }
}  

@media (max-width: 480px) {
  padding: 10px 0 57px 20px;
}

@media (max-width: 440px) {
  padding: 10px 0 57px 0px;

  form {
    margin: 0 auto;
  }
}

`;

const Info = styled.div`
   background: url(/img/consultation/women-with-glases.jpg) no-repeat;
   background-size: cover;
   padding: 10px 0 57px 62px;
   
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