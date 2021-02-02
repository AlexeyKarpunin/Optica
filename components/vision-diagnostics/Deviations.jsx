import styled from 'styled-components'

export default function Deviations () {
  return (
    <DeviationsSection>
      <DeviationsContainer>
        <DeviationsList>
          <h2>Наши Оптометристы располагают самым современным компьютерным оборудованием, способным наиболее точно подобрать необходимую для Вас оптику</h2>
          <ul>
            <li>нарушений рефракции (близорукость, дальнозоркость, астигматизм);</li>
            <li>нарушений глазодвигательного аппарата (косоглазие, амблиопия);</li>
            <li>патологии переднего отрезка глаза разного происхождения (заболевания век, конъюнктивы, роговицы, склеры, радужной оболочки, хрусталика);</li>
            <li>патологии заднего отрезка глаза (сосудистые и воспалительные заболевания сетчатки и зрительного нерва, в том числе при гипертонической болезни, сахарном диабете, глаукоме);</li>
            <li>травматических поражений органа зрения.</li>
            <li>помощь в подборе брендовых имиджевых оправ</li>
          </ul>
        </DeviationsList>
      </DeviationsContainer>
    </DeviationsSection>
  )
}

const DeviationsSection = styled.section`
  max-width: 1920px;
  margin: o auto;
`;

const DeviationsContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 0 50px 0;
`;

const DeviationsList = styled.div`
 h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
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