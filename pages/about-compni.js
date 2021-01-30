import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AboutComponi from '../components/AboutComponi';

import '../styles/fonts.css';

export default function AboutComponiPage() {
  return (
    <>
      <Head />
      <Header activeLink='componi' />
      <AboutComponi />
      <Footer />
    </>
  )
}