import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import DefButton from '../DefButton';
import {sendForm} from '../../redux/actions';

export default function Form () {
  
  const [formStatus, setFormStatus] = useState('default');
  
  const sendStatusForm = useSelector( (state) => state.form.formStatus);
  const refName = React.createRef();
  const refPhone = React.createRef();
  const refComment = React.createRef();
 
  const dispatch = useDispatch();

  async function  ClickSendForm(e) {
    e.preventDefault();

    const info = {
      name: refName.current.value,
      phone: refPhone.current.value,
      comment: refComment.current.value
    }
   

    fetch('/api/send-form', {
      method: 'POST', 
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(( response ) => response.json()).then((data) => {
      setFormStatus(data.message);
      if (data.message === 'success' || data.message === 'server erorr') {
        setTimeout( () => {setFormStatus('default')}, 3500)
        dispatch(sendForm());
      }
    })
  }

  useEffect( () => {
    if (sendStatusForm === 'send') {
      refName.current.value = '';
      refPhone.current.value = '';
      refComment.current.value = '';
    };
  }, [sendStatusForm])
 


  return (
    <FormWrapper status={formStatus}>
      <h2>
        Заполните форму
        <br />
        и мы свяжемся с вами 
        <br />
        <span>в ближайшее время</span>
      </h2>
      <input ref={refName} type='text' placeholder='Ваша ФИО' />
      <InputMask ref={refPhone} mask='+79999999999' placeholder='Ваш номер телефона' type='text' />
      <textarea ref={refComment} type='text' placeholder='Ваш комментарий' />
      <DefButton 
        text='Оставить заявку'
        styles='padding: 19px 64px;box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));'
        onClickFunc={ClickSendForm}
        link={null}
      />
      <Rectangle src='/img/blue-rectangle.png' alt='blue rectangle' />
      <Glasses src='/img/glasses.png' alt='glasses' />
      <ModalForm status={formStatus}>
        <div>
          {formStatus === 'success' ? 'Форма отправленна' : ' '}
          {formStatus === 'server erorr' ? 'Ошибка сервера повторите отправку позже' : ' '}
        </div>
      </ModalForm>
    </FormWrapper>
  );
};

const ModalForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.status === 'success' || props.status === 'server erorr' ? '10' : '-1'};
  background: #FFFEFE;
  box-shadow: 0px 13px 25px rgba(0, 0, 0, 0.25);

  div {
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #1C8594;
  }
`;

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
    border: ${props => props.status === 'incorrect comment' ? '1px solid red' : null}
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
    
    
    &:nth-child(2) {
      border: ${props => props.status === 'incorrect name' ? '1px solid red' : null}
    }

    &:nth-child(3) {
      border: ${props => props.status === 'incorrect phone' ? '1px solid red' : null}
    }
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