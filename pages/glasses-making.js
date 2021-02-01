import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoMaking from '../components/glasses-making/InfoMaking';
import Pricemaking from '../components/glasses-making/Pricemaking';
import Choose from '../components/glasses-making/Choose';
import Consultation from '../components/selection-of-lenses/Consultation';
import If from '../components/selection-of-lenses/If';

import '../styles/fonts.css';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='making' />
      <InfoMaking />
      <Pricemaking />
      <Choose />
      <If />
      <Consultation />
      <Footer />
    </>
  )
}