import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import './styles.css'

function App(){
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Industries />
        <Pricing />
        <Team />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
