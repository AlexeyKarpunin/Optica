import Head from 'next/head'
import styled from 'styled-components';
import Header from '../components/header/Header';
import Vision from '../components/Vision';
import Services from '../components/services/Services';
import Offers from '../components/Offers';
import Wait from '../components/Wait';
import Ask from '../components/ask/Ask'
import Footer from '../components/footer/Footer';
import Glasses from '../components/Glasses';
import '../styles/fonts.css';

export default function Home() {

  return (
    <>
      <Head />
      <Header activeLink='main' />
      <Vision />
      <Glasses />
      <BackgroundWrraper>
        <Services />
        <Offers />
        <Wait /> 
      </BackgroundWrraper>
      <Ask />
      <Footer bigPadding={true} />
    </>
  )
}

const BackgroundWrraper = styled.section`
  background: url(/img/mainGround.jpg) no-repeat;
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 57px;
  background-position: center;
  background-size: cover;

  @media (max-width: 950px) {
    background: none;
    margin-top: 0px;
  }
`;

