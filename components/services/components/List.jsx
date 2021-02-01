
import styled from 'styled-components';
import DefButton from '../../DefButton';

export default function List () {
  return(
    <ListWrraper>
      <ServicesList>
        <BigLi>
          <p>
            Изготовление 
            <br />
            очков
          </p>
          <DefButton 
            text='Узнать подробнее'
            styles='
            padding: 18px 35px; position: absolute; bottom: 29px; left: 50%; transform: translate(-50%, 0); width: 220px;
            box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));white-space: nowrap;
            '
            link='/glasses-making'
          />
        </BigLi>
        <SmallLi>
          <p>
            Подбор линз 
            <br />
            по рецепту
          </p>
          <DefButton 
            text='Узнать подробнее'
            styles='padding: 15px 35px; position: absolute; bottom: 18px; left: 50%; transform: translate(-50%, 0); width: 220px;
            box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));white-space: nowrap;
            '
            link='/selection-of-lenses'
          />
        </SmallLi>
        <SmallLi>
          <p>Тонировка линз</p>
          <DefButton 
            text='Узнать подробнее'
            styles='padding: 15px 35px; position: absolute; bottom: 18px; left: 50%; transform: translate(-50%, 0); width: 220px;
            box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));white-space: nowrap;
            '
            link='/lens-tinting'
          />
        </SmallLi>
        <BigLi>
          <p>
            Диагностика
            <br />
            зрения
          </p>
          <DefButton 
            text='Узнать подробнее'
            styles='
            padding: 18px 35px; position: absolute; bottom: 29px; left: 50%; transform: translate(-50%, 0); width: 220px;
            box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));white-space: nowrap;
            '
            link='vision-diagnostics'
          />
        </BigLi>
      </ServicesList>
    </ListWrraper>
  );
}

const ListWrraper = styled.div``;

const ServicesList = styled.ul`
  list-style: none;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  color: #1C8594;

  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    padding: 25px 0 0 43px;
  }

  @media (max-width: 825px) {
    column-count: 1;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 420px;
    padding: 0;
  }
`;
const BigLi = styled.li`
  width: 370px;
  height: 373px;
  position: relative;
  &:nth-child(1) {
    background: url('/img/services/glasses.png') no-repeat;
    margin-bottom: 24px;
    margin-right: 10px;
  }
 
  &:nth-child(4) {
    background: url('/img/services/check-vision.png') no-repeat;
  }

  @media (max-width: 825px) {
    margin: 0 auto;

    &:nth-child(1) {
      margin-right: auto;
    }
  }

  @media (max-width: 380px) {
    width: 270px;
  }
`;

const SmallLi = styled.li`
  width: 370px;
  height: 253px;
  position: relative;
  &:nth-child(3) {
    background: url('/img/services/black-glasses.png') no-repeat;
    margin-bottom: 23px;
  }
  &:nth-child(2) {
    background: url('/img/services/gm_and_gf.png') no-repeat;
  }

  @media (max-width: 825px) {
    &:nth-child(3) {
      margin-top: 23px;
    }

    margin: 0 auto;
  }

  @media (max-width: 380px) {
    width: 270px;
  }
`;