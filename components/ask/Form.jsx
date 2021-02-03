import styled from 'styled-components';
import DefButton from '../DefButton';
import sendForm from '../../API/api';

export default function Form () {
  
  async function  ClickSendForm(e) {
    e.preventDefault();
    
    const text = {
      name: 'Alex',
      phone: '0000'
    }

    fetch('api/send-form', {
      method: 'POST', 
      body: JSON.stringify(text), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <FormWrapper>
      <h2>
        Заполните форму
        <br />
        и мы свяжемся с вами 
        <br />
        <span>в ближайшее время</span>
      </h2>
      <input type='text' placeholder='Ваша ФИО' />
      <input type='text' placeholder='Ваш номер телефона' />
      <textarea type='text' placeholder='Ваш комментарий' />
      <DefButton 
        text='Оставить заявку'
        styles='padding: 19px 64px;box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));'
        onClickFunc={ClickSendForm}
        link={null}
      />
      <Rectangle src='/img/blue-rectangle.png' alt='blue rectangle' />
      <Glasses src='/img/glasses.png' alt='glasses' />
    </FormWrapper>
  );
};

const Glasses = styled.img`
  position: absolute;
  top: -67px;
  right: -75px;

  @media (max-width: 528px) {
    display: none;
  }
`;
const Rectangle = styled.img`
  position: absolute;
  top: -85px;
  left: -40px;

  @media (max-width: 460px) {
    display: none;
  }
`;

const FormWrapper = styled.form`
  position: absolute;
  top: 258px;
  right: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 465px;
  height: 638px;
  padding: 53px 70px 60px 70px;
  background: #FFFEFE;
  box-shadow: 0px 13px 25px rgba(0, 0, 0, 0.25);

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    color: #1C626B;
    margin: 0;
  }
  h2 span {
    color: #1DB9C8;
    font-weight: bold;
  }
  
  textarea {
    resize: none;
    height: 148px;
    background: #F6F6F6;
    border: 1px solid #EEEFEF;
    box-sizing: border-box;
    padding: 17px 0 17px 23px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  input {
    background: #F6F6F6;
    border: 1px solid #EEEFEF;
    box-sizing: border-box;
    padding: 17px 0 17px 23px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  textarea::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #B2C1C4;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #B2C1C4;
  }
  
  @media (max-width: 1325px) {
    right: 155px;
  }

  @media (max-width: 1125px) {
    left: 50px;
    top: 400px;
    right: 0;
  }

  @media (max-width: 590px) {
    width: 400px;
    height: 700px;
  }

  @media (max-width: 460px) {
    left: 10px;
  }

  @media (max-width: 410px) {
    width: 100%;
    height: 700px;
    left: 0;
    padding: 53px 20px 60px 20px;
    top: 420px;
  }
`;