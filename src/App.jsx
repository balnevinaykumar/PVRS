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
import './styles.css'
import { useEffect } from 'react'
import { createTimeline, stagger } from 'animejs'

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
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Industries />
        <Pricing />
        <Team />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
