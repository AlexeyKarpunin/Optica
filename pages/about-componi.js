import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AboutComponi from '../components/AboutComponi';
import Consultation from '../components/selection-of-lenses/Consultation';

import '../styles/fonts.css';
import styled from 'styled-components';

export default function AboutComponiPage() {
  return (
    <>
      <Head />
      <Header activeLink='componi' />
      <AboutComponi />
      <WhyWe />
      <Consultation />
      <Footer />
    </>
  )
}

function WhyWe () {
  return (
    <WhyWeSection>
      <WhyWeConteiner>
        <h3>Почему мы?</h3>
        <ul>
          <li>Богатый выбор оправ, очковых и контактных линз.</li>
          <li>Продукция и оборудование в салоне лицензированы, имеют все требуемые сертификаты качества.</li>
          <li>У нас работают квалифицированные и опытные специалисты в сфере оптики.</li>
          <li>Изготовление очков любой сложности в короткие сроки.​​​</li>
          <li>Разумные цены.</li>
          <li>Консультация по всем вопросам, связанным с нашим ассортиментом и Вашим зрением.</li>
        </ul>
        <h3>Что мы предлагаем?</h3>
        <ul>
          <li>Оправы для детей и взрослых на любые предпочтения и бюджет, очки как самых доступных, так и премиальных брендов.</li>
          <li>Готовые очки и компьютерные очки.</li>
          <li>ОЧКОВЫЕ ЛИНЗЫ</li>
          <li>Контактные линзы: Корригирующие, цветные. ​​​</li>
          <li>СОЛНЦЕЗАЩИТНЫЕ ОЧКИ в различном дизайнерском и цветовом исполнении.</li>
          <li>Средства ухода и хранения для очков и контактных линз.</li>
        </ul>
        <span>Испытайте настоящую свободу зрения!</span>
      </WhyWeConteiner>
    </WhyWeSection>
  );
}

const WhyWeSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 0 50px 0
`;

const WhyWeConteiner = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 116.2%;
    color: #1C626B;;
    margin: 0;
    padding: 20px 0 0 0;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 116.2%;
    color: #1C626B;;
    margin: 0;
    padding: 20px 0 0 0;
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
