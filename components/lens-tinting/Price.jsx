import styled from 'styled-components';

export default function Price () {
  return (
    <PriceSection>
      <PriceContainer>
        <h2>
          Цены на
          {' '}
          <span>тонировку линз</span>
        </h2>
        <p>Указаны цены за пару</p>
        <Table>
          <HeadLI> 
            {' '}
            <div>Услуга</div> 
            {' '}
            <div>Цена</div>
          </HeadLI>
          <ServiceLI>
            <div>Сплошной окрас</div> 
            {' '}
            <div>420 руб.</div>
          </ServiceLI>
          <ServiceLI>
            <div>Градиентный окрас</div> 
            {' '}
            <div>600 руб.</div>
          </ServiceLI>
          <ServiceLI>
            <div>Сплошной окрас</div> 
            {' '}
            <div>420 руб.</div>
          </ServiceLI>
          <ServiceLI>
            <div>Окрас "Биколор"</div> 
            {' '}
            <div>580 руб.</div>
          </ServiceLI>
          <ServiceLI>
            <div>Нанесение дополнительного покрытия UV-фильтр</div> 
            {' '}
            <div>510 руб.</div>
          </ServiceLI>
          <ServiceLI>
            <div>Тонировка по образцу заказчика</div> 
            {' '}
            <div>640 руб.</div>
          </ServiceLI>
          <ServiceLI>
            <div>Подбор цвета</div> 
            {' '}
            <div>680 руб.</div>
          </ServiceLI>
        </Table>
      </PriceContainer>
    </PriceSection>
  );
} 

const PriceSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 0 80px 0;
`;

const PriceContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #1C626B;
    margin-bottom: 10px;
    span {
      color: #1DB9C8;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #1C8594;
    margin: 0;
  }

`;

const Table = styled.ul`
  list-style: none;
  padding: 0;
`;
const HeadLI = styled.li`
  display: flex;
  div {
    background: linear-gradient(91.79deg, #1BC8D8 15.76%, #56C8E8 98.76%);
    text-align: center;
    padding: 15px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    color: #FFFFFF;
    &:nth-child(1){
      width: 70%;
    }

    &:nth-child(2){
      width: 30%;
      margin-left: 13px;
    }
  }
`; 

const ServiceLI = styled.li`
   display: flex;
   div {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #1C8594;
    line-height: 28px;
    background: #F4F4F4;

     &:nth-child(1){
      padding: 18px 0 18px 45px;
      margin: 10px 0;
      width: 70%;
     }

     &:nth-child(2){
      font-weight: bold;
      text-align: center;
      padding: 18px 0;
      margin: 10px 0 10px 13px;
      width: 30%;
     }
   }
`;

// const ServiceLI = styled.li`

//   
//   
// `;

// const PriceLI = styled.li`

//   
// `;