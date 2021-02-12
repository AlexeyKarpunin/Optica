import styled from 'styled-components';
import Logo from './components/Logo';
import Goods from './components/Goods';
import Services from './components/Services';
import Info from './components/Info';

export default function Footer ({bigPadding}) {
  return (
    <FooterSection>
      <FooterContainer padding={bigPadding}>
        <Logo />
        {/* <Goods /> */}
        <Services />
        <Info />
      </FooterContainer>
      <div className='bzcekh--container'>
        <div className='column is-bzcekh' style={{marginTop: '20px'}}>
          <a target='_blank' rel='noreferrer' className='' href='https://bzcekh.ru/' title='Изготовление интернет сайтов в Астрахани'>
            <img className='is-bzcekh' src='/img/logo3.svg' alt='Маркетинговое агентство «Бизнес Цех»' title='Заказать разработку интернет сайта в Астрахани' />
          </a>
        </div>
        <div className='is-bzcekh--text'> © 2021 Все права защищены.</div>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  max-width: 1920px;
  margin: 0 auto;
  background: linear-gradient(90.54deg, #3CD0DD 0.05%, #20C3D2 0.06%, #49C4E4 100%);
`;
const FooterContainer = styled.div`
  max-width: 1028px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 47px 0 0 0;

  @media (max-width: 1124px) {
    padding: ${props => props.padding ? '200px' : '50px'} 0 0 0;
  }

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    padding: ${props => props.padding ? '200px' : '50px'} 15px 0 15px;
  }

  @media (max-width: 590px) {
    padding: ${props => props.padding ? '250px' : '50px'} 15px 15px 15px;
  }

  @media (max-width: 410px) {
    padding: ${props => props.padding ? '320px' : '50px'} 15px 15px 15px;
  }

  @media (max-width: 385px) {
    flex-direction: column;
    h2 {
      text-align: center;
    }

    ul {
      width: 200px;
      margin: 15px auto;
    }
  }
`;


