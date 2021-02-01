import Head from 'next/head'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoDiagnostic from '../components/vision-diagnostics/InfoDiagnostic';
import Deviations from '../components/vision-diagnostics/Deviations';
import Consultation from '../components/selection-of-lenses/Consultation';

import '../styles/fonts.css';

export default function Home() {
  return (
    <>
      <Head />
      <Header activeLink='diagnostic' />
      <InfoDiagnostic />
      <Deviations />
      <Consultation />
      <Footer />
    </>
  )
}