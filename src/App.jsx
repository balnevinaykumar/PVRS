import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Team from './components/Team'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './styles.css'
import { useEffect } from 'react'
import { createTimeline, stagger } from 'animejs'

const flowParticles = Array.from({ length: 156 }, (_, index) => {
  const edge = index % 4
  const lane = Math.floor(index / 4)
  const spread = ((lane * 13) % 100) + (index % 5) * 0.45
  const clusterX = 45 + ((lane * 5) % 16)
  const clusterY = 24 + ((lane * 9) % 24)

  let fromX = '-6vw'
  let fromY = '-6vh'

  if (edge === 0) {
    fromX = `${spread}vw`
    fromY = `${-8 - (lane % 4) * 2}vh`
  } else if (edge === 1) {
    fromX = `${104 + (lane % 4) * 2}vw`
    fromY = `${spread}vh`
  } else if (edge === 2) {
    fromX = `${spread}vw`
    fromY = `${104 + (lane % 4) * 2}vh`
  } else {
    fromX = `${-8 - (lane % 4) * 2}vw`
    fromY = `${spread}vh`
  }

  return {
    fromX,
    fromY,
    toX: `${clusterX}vw`,
    toY: `${clusterY}vh`,
    size: 0.9 + ((lane * 3) % 8) / 10,
    duration: 18 + (lane % 10) * 1.7,
    delay: -((index % 18) * 1.6 + (lane % 7) * 0.8),
    opacity: 0.42 + (lane % 5) * 0.08,
  }
})

function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="background-glow" />
      <div className="background-grid" />
      <div className="background-stars">
        {flowParticles.map((particle, index) => (
          <span
            key={`${particle.fromX}-${particle.fromY}-${index}`}
            className="background-particle"
            style={{
              '--particle-from-x': particle.fromX,
              '--particle-from-y': particle.fromY,
              '--particle-to-x': particle.toX,
              '--particle-to-y': particle.toY,
              '--particle-opacity': particle.opacity,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function App(){
  useEffect(()=>{
    try{
      // simple hero entrance if `.hero-inner` exists
      if(document.querySelector('.hero-inner')){
        createTimeline({ easing: 'easeOutCubic', duration: 700 })
          .add({ targets: '.hero-inner h1', translateY: [18,0], opacity: [0,1], delay: 80 })
          .add({ targets: '.hero-inner p', translateY: [12,0], opacity: [0,1], delay: stagger(60) }, '-=500')
          .add({ targets: '.hero-inner .device-mockup', scale: [0.96,1], opacity: [0.85,1], duration: 900 }, '-=580');
      }

      // Scroll-triggered animations for other sections
      const selectors = '.card, .gallery figure, .hero-media, .section-title, .service-card, .plan, .member, .process-step, .faq-item';
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
          if(!entry.isIntersecting) return;
          const el = entry.target;
          if(el.dataset.animated) return;
          el.dataset.animated = '1';

          // If element has multiple direct children, animate them with a stagger
          const children = Array.from(el.children || []);
          if(children.length > 1){
            createTimeline({ easing: 'easeOutCubic', duration: 520 })
              .add({ targets: children, translateY: [14,0], opacity: [0,1], delay: stagger(64) });
          } else {
            createTimeline({ easing: 'easeOutCubic', duration: 600 })
              .add({ targets: el, translateY: [12,0], opacity: [0,1] });
          }
          observer.unobserve(el);
        });
      }, { threshold: 0.12 });

      document.querySelectorAll(selectors).forEach(node => observer.observe(node));
    }catch(e){
      console.error('Animation error:', e)
    }
  }, [])
  return (
    <div className="app-root">
      <BackgroundEffects />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Industries />
        <Pricing />
        <Reviews />
        <Team />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
