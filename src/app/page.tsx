import Nav from '@/components/Nav'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import PinterestStrip from '@/components/PinterestStrip'
import Finds from '@/components/Finds'
import Shops from '@/components/Shops'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Ticker />
      <main id="main-content">
        <Hero />
        <PinterestStrip />
        <Finds />
        <Shops />
        <HowItWorks />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
