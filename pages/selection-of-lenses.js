import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoSection from '../components/selection-of-lenses/InfoSection'
import Consultation from '../components/selection-of-lenses/Consultation'
import SelectionList from '../components/selection-of-lenses/SelectionList';

import '../styles/fonts.css';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='lenses' />
      <InfoSection />
      <SelectionList />
      <Consultation />
      <Footer />
    </>
  )
}