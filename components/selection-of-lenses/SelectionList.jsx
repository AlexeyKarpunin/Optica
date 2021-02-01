import styled from 'styled-components'

export default function SelectionList () {
  return (
    <SelectionSection>
      <SelectionContainer>
        <SList> 
          <h2>Что включает процедура подбора контактных линз?</h2>
          <ul>
            <li>Измерение кривизны роговицы глаза.</li>
            <li>Исследование состояния слезной пленки глаза.</li>
            <li>Тщательный осмотр глаз с помощью щелевой лампы.</li>
            <li>Определим подходящий именно для Вас вид контактных линз с учетом индивидуальных особенностей глаз.</li>
            <li>Проведет примерку диагностических линз.</li>
            <li>Расскажем о правилах использования и ухода.</li>
            <li>Обучим навыкам обращения с контактными линзами.</li>
          </ul>
        
        </SList>
      </SelectionContainer>
    </SelectionSection>
  );
}

const SelectionSection = styled.section`
  max-width: 1920px;
  margin: o auto;
`;

const SelectionContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 0 50px 0;
`;

const SList = styled.div`
 h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 116.2%;
  color: #1C626B;;
  margin: 0;
  margin-top: -40px;
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