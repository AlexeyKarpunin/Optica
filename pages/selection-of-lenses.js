import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoSection from '../components/selection-of-lenses/InfoSection'
import Consultation from '../components/selection-of-lenses/Consultation'
import SelectionList from '../components/selection-of-lenses/SelectionList';
import Choose from '../components/glasses-making/Choose';

import '../styles/fonts.css';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='lenses' />
      <Choose />
      {/* <InfoSection />
      <SelectionList /> */}
      <SomeText />
      <Consultation />
      <Footer />
    </>
  )
}

function SomeText () {
  return (
    <SomeTextSection>
      <SomeTextContainer>
        <p>Если Вам не подходят стандартные модели очков, имеющиеся в продаже, мы сможем изготовить их по Вашим размерам, подобрав подходящую по стилю и характеру оправу и корригирующие линзы. </p>
        <p>Что позволяет специалистам быстро и точно изготавливать оптику любой сложности? Конечно же, современное технологическое оборудование и качественные комплектующие для очков.</p>
      </SomeTextContainer>
    </SomeTextSection>
  );
}

const SomeTextSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
`;

const SomeTextContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #1C8594;
  }
`;