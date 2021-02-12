import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoTining from '../components/lens-tinting/InfoTining';
import Price from '../components/lens-tinting/Price';
import Consultation from '../components/selection-of-lenses/Consultation';


import '../styles/fonts.css';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='tinting' />
      <InfoTining />
      <SomeInfo />
      {/* <Price /> */}
      <Consultation />
      <Footer />
    </>
  )
}

function SomeInfo () {
  return (
    <SomeInfoSection>
      <SomeInfoContainer>
        <h3>Данный вид очков рекомендуют носить во время:</h3>
        <ul>
          <li>Вождения автомобиля;</li>
          <li>Занятий спортом;</li>
          <li>Продолжительной работы за компьютером;</li>
          <li>
            При таких заболеваниях зрительных органов,
            <br />
            {' '}
            как глаукома, светобоязнь и так далее.
          </li>
        </ul>
        <p>Если говорить об эстетической составляющей, то при помощи тонированных очковых линз можно оградиться от излишне яркого света. Они представлены как солнцезащитные очки или дополнительные световые фильтры, в зависимости от интенсивности и глубины оттенка.</p>
        <p>Тонированные линзы для очков невероятно универсальны и разнообразны. Например, женщины, которые часто носят очки, могут подобрать по своему вкусу тонировку линзы и создавать себе оригинальный аксессуар к макияжу или одежде.</p>
        <h3>Мы предлагаем следующие цвета и оттенки линз для очков:</h3>
        <ul>
          <li>Серый,</li>
          <li>Коричневый,</li>
          <li>Зеленый,</li>
          <li>Оранжевый,</li>
          <li>Желтый,</li>
          <li>Красный,</li>
          <li>Розовый,</li>
          <li>Синий, голубой.</li>
        </ul>
        <span>Создайте настроение с тонированными очковыми линзами, а наши мастера Вам в этом помогут!</span>
      </SomeInfoContainer>
    </SomeInfoSection>
  );
}

const SomeInfoSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 0 60px 0;
`;
const SomeInfoContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #1C8594;
    padding 20px 0 0 0;
  }

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
      line-height: 20px;
      color: #1C8594;
      position: relative;
      margin-bottom: 15px;
      }
  
      ul li::before {
        content: '';
        position: absolute;
        width: 12px;
        height: 15px;
        left: -30px;
        top: 3px;
        // top: 50%;
        // -webkit-transform: translate(-50%,0);
        // -ms-transform: translate(-50%,0);
        // transform: translate(0, -50%);
        background: rgba(83,200,231,0.5);
    }
  
    @media (max-width: 950px) {
      h2 {
        padding: 0 10px;
      }
    }
`;