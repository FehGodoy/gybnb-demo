import type { NextPage } from 'next'
import Head from 'next/head'
import BannerAndText from '../components/BannerAndText'
import Feel from '../components/Feel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderTop from '../components/Header/HeaderTop'
import LiveAnywhere from '../components/LiveAnywhere'
import Nearby from '../components/Nearby'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Godoybnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      {/* Header TOP Message */}
      <HeaderTop />
      {/* Header TOP Message */}
      {/* Header */}
      <Header />
      {/* Header */}
      {/* Text + Banner */}
      <BannerAndText />
      {/* Nearby Places */}
      <Nearby />
      <LiveAnywhere />
      <Feel />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Home
