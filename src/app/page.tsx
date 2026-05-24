import Nav from '@/components/Nav'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import Finds from '@/components/Finds'
import Shops from '@/components/Shops'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import PinterestStrip from '@/components/PinterestStrip'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Ticker />
      <main id="main-content">
        <Hero />
        <Finds />
        <Shops />
        <HowItWorks />
        <About />
        <Newsletter />
        <PinterestStrip />
      </main>
      <Footer />
    </>
  )
}
