import styled from "styled-components";

export default function If () {
  return (
    <IfSection>
      <IfContainer>
        <p>Если Вам не подходят стандартные модели очков, имеющиеся в продаже, мы сможем изготовить их по Вашим размерам, подобрав подходящую по стилю и характеру оправу и корригирующие линзы. </p>
        <p>Что позволяет специалистам быстро и точно изготавливать медицинскую оптику любой сложности? Конечно же, современное технологическое оборудование и качественные комплектующие для очков.</p>
        <IfList> 
          <h2>Важнейшим функциональным звеном в работе нашей компании является оптическая мастерская, в которой производят очки различного назначения:</h2>
          <ul>
            <li>Измерение кривизны роговицы глаза.</li>
            <li>Исследование состояния слезной пленки глаза.</li>
            <li>Тщательный осмотр глаз с помощью щелевой лампы.</li>
            <li>Определим подходящий именно для Вас вид контактных линз с учетом индивидуальных особенностей глаз.</li>
            <li>Проведет примерку диагностических линз.</li>
            <li>Расскажем о правилах использования и ухода.</li>
            <li>Обучим навыкам обращения с контактными линзами.</li>
          </ul>
        
        </IfList>
      </IfContainer>
    </IfSection>
  )
}

const IfSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 0 60px 0;
`;
const IfContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #1C8594;
  }

  @media (max-width: 1170px) {
    p {
      padding: 0 0 0 10px;
    }
  }
`;

const IfList = styled.div`
h2 {
  font-style: normal;
  font-weight: bold;
  font-size: px;
  line-height: 116.2%;
  color: #1C626B;;
  margin: 0;
  }

  ul {
    list-style: none;
  }

  ul li {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #1C8594;
    position: relative;
    margin-bottom: 10px;
    }

    ul li::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 20px;
      left: -30px;
      top: 50%;
      -webkit-transform: translate(-50%,0);
      -ms-transform: translate(-50%,0);
      transform: translate(0, -50%);
      background: rgba(83,200,231,0.5);
  }

  @media (max-width: 950px) {
    h2 {
      padding: 0 10px;
    }
  }
`;

