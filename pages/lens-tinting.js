import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoTining from '../components/lens-tinting/InfoTining';
import Price from '../components/lens-tinting/Price';
import Consultation from '../components/selection-of-lenses/Consultation';


import '../styles/fonts.css';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='tinting' />
      <InfoTining />
      <Price />
      <Consultation />
      <Footer />
    </>
  )
}