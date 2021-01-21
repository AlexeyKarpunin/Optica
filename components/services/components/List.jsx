
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
          />
        </SmallLi>
        <SmallLi>
          <p>Тонировка линз</p>
          <DefButton 
            text='Узнать подробнее'
            styles='padding: 15px 35px; position: absolute; bottom: 18px; left: 50%; transform: translate(-50%, 0); width: 220px;
            box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));white-space: nowrap;
            '
          />
          {/* <Button>Узнать подробнее</Button> */}
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
          />
        </BigLi>
      </ServicesList>
    </ListWrraper>
  );
}
// const Button = styled.button`
//   background: linear-gradient(91.79deg, #1BC8D8 15.76%, #56C8E8 98.76%);
//   outline: none;
//   border: none;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 22px;
//   text-align: center;
//   color: #FFFFFF;
//   padding: 15px 35px;
//   position: absolute;
//   bottom: 18px; left: 50%;
//   transform: translate(-50%, 0);
//   width: 220px;
//   box-shadow: inset 0px -1px 3px rgba(255, 255, 255, 0.2);
//   filter: drop-shadow(0px 19px 15px rgba(0, 0, 0, 0.15));
//   &:hover{
//     cursor: pointer;
//     background: linear-gradient(91.79deg, #00aab9 15.76%, #2d8ca7 98.76%);
//   }`

const ListWrraper = styled.div``;
const ServicesList = styled.ul`
  list-style: none;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;

  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    padding: 25px 0 0 43px;
  }


color: #1C8594;
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
`;