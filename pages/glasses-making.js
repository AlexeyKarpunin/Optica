import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../styles/fonts.css';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='making' />
      <div>Изготовление очков</div>
      <Footer />
    </>
  )
}