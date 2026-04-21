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

const floatingParticles = [
  { left: '8%', top: '18%', size: 2.2, duration: 8.5, delay: 0, opacity: 0.78 },
  { left: '15%', top: '58%', size: 1.7, duration: 7.4, delay: 1.3, opacity: 0.45 },
  { left: '23%', top: '28%', size: 1.6, duration: 9.1, delay: 2.8, opacity: 0.52 },
  { left: '29%', top: '74%', size: 1.9, duration: 8.8, delay: 4.1, opacity: 0.4 },
  { left: '34%', top: '12%', size: 2.8, duration: 10.2, delay: 1.7, opacity: 0.88 },
  { left: '41%', top: '52%', size: 1.5, duration: 7.9, delay: 5.2, opacity: 0.38 },
  { left: '48%', top: '34%', size: 1.8, duration: 9.4, delay: 0.9, opacity: 0.5 },
  { left: '57%', top: '68%', size: 1.4, duration: 7.2, delay: 3.5, opacity: 0.34 },
  { left: '63%', top: '22%', size: 2.1, duration: 8.6, delay: 2.1, opacity: 0.62 },
  { left: '71%', top: '40%', size: 1.5, duration: 9.8, delay: 4.9, opacity: 0.4 },
  { left: '79%', top: '17%', size: 1.9, duration: 8.1, delay: 1.1, opacity: 0.56 },
  { left: '86%', top: '60%', size: 1.6, duration: 7.7, delay: 5.7, opacity: 0.43 },
  { left: '92%', top: '26%', size: 2.4, duration: 10.6, delay: 2.9, opacity: 0.75 },
  { left: '11%', top: '85%', size: 1.4, duration: 9.7, delay: 6.1, opacity: 0.3 },
  { left: '54%', top: '84%', size: 1.7, duration: 8.9, delay: 3.2, opacity: 0.36 },
  { left: '88%', top: '82%', size: 1.5, duration: 9.3, delay: 4.4, opacity: 0.32 },
  { left: '6%', top: '34%', size: 1.6, duration: 18, delay: 1.1, opacity: 0.42 },
  { left: '12%', top: '42%', size: 1.3, duration: 19.5, delay: 2.3, opacity: 0.3 },
  { left: '18%', top: '12%', size: 1.5, duration: 20.8, delay: 3.4, opacity: 0.35 },
  { left: '21%', top: '64%', size: 1.8, duration: 22.4, delay: 0.8, opacity: 0.5 },
  { left: '27%', top: '48%', size: 1.4, duration: 17.9, delay: 4.7, opacity: 0.34 },
  { left: '32%', top: '80%', size: 1.6, duration: 21.2, delay: 5.4, opacity: 0.38 },
  { left: '37%', top: '25%', size: 1.2, duration: 18.6, delay: 6.1, opacity: 0.28 },
  { left: '43%', top: '70%', size: 1.7, duration: 23, delay: 2.2, opacity: 0.44 },
  { left: '46%', top: '16%', size: 1.4, duration: 19.2, delay: 3.6, opacity: 0.32 },
  { left: '52%', top: '44%', size: 1.6, duration: 20.4, delay: 1.5, opacity: 0.36 },
  { left: '58%', top: '10%', size: 1.3, duration: 22.8, delay: 4.2, opacity: 0.31 },
  { left: '61%', top: '78%', size: 1.9, duration: 24.5, delay: 5.8, opacity: 0.48 },
  { left: '67%', top: '56%', size: 1.5, duration: 18.8, delay: 0.4, opacity: 0.34 },
  { left: '73%', top: '30%', size: 1.4, duration: 21.6, delay: 2.7, opacity: 0.33 },
  { left: '76%', top: '86%', size: 1.7, duration: 23.8, delay: 6.4, opacity: 0.41 },
  { left: '82%', top: '46%', size: 1.3, duration: 17.6, delay: 1.9, opacity: 0.29 },
  { left: '84%', top: '12%', size: 1.5, duration: 20.1, delay: 3.1, opacity: 0.35 },
  { left: '90%', top: '72%', size: 1.8, duration: 22.2, delay: 4.9, opacity: 0.46 },
  { left: '94%', top: '52%', size: 1.4, duration: 19.7, delay: 5.7, opacity: 0.3 },
  { left: '97%', top: '18%', size: 1.2, duration: 18.4, delay: 0.6, opacity: 0.26 },
  { left: '4%', top: '24%', size: 1.1, duration: 17.4, delay: 2.6, opacity: 0.24 },
  { left: '7%', top: '68%', size: 1.2, duration: 21.1, delay: 4.4, opacity: 0.27 },
  { left: '10%', top: '8%', size: 1.3, duration: 23.2, delay: 5.1, opacity: 0.31 },
  { left: '13%', top: '30%', size: 1.1, duration: 19.6, delay: 1.7, opacity: 0.22 },
  { left: '16%', top: '76%', size: 1.2, duration: 18.9, delay: 3.8, opacity: 0.26 },
  { left: '19%', top: '53%', size: 1.1, duration: 24.2, delay: 6.2, opacity: 0.23 },
  { left: '24%', top: '18%', size: 1.2, duration: 17.7, delay: 2.4, opacity: 0.25 },
  { left: '26%', top: '38%', size: 1.1, duration: 20.7, delay: 0.7, opacity: 0.2 },
  { left: '30%', top: '60%', size: 1.3, duration: 22.5, delay: 5.3, opacity: 0.28 },
  { left: '33%', top: '6%', size: 1.1, duration: 19.1, delay: 4.6, opacity: 0.22 },
  { left: '36%', top: '43%', size: 1.2, duration: 18.1, delay: 1.2, opacity: 0.24 },
  { left: '40%', top: '83%', size: 1.1, duration: 23.4, delay: 6.4, opacity: 0.21 },
  { left: '44%', top: '28%', size: 1.2, duration: 20.3, delay: 2.9, opacity: 0.25 },
  { left: '49%', top: '14%', size: 1.1, duration: 17.2, delay: 4.8, opacity: 0.22 },
  { left: '51%', top: '70%', size: 1.2, duration: 21.8, delay: 3.1, opacity: 0.26 },
  { left: '55%', top: '36%', size: 1.1, duration: 18.6, delay: 1.9, opacity: 0.23 },
  { left: '59%', top: '58%', size: 1.2, duration: 22.1, delay: 5.6, opacity: 0.25 },
  { left: '62%', top: '4%', size: 1.1, duration: 16.9, delay: 2.1, opacity: 0.22 },
  { left: '66%', top: '26%', size: 1.2, duration: 24.4, delay: 4.3, opacity: 0.28 },
  { left: '69%', top: '74%', size: 1.1, duration: 20.6, delay: 0.9, opacity: 0.22 },
  { left: '74%', top: '10%', size: 1.2, duration: 18.7, delay: 3.4, opacity: 0.24 },
  { left: '78%', top: '52%', size: 1.1, duration: 21.4, delay: 5.9, opacity: 0.23 },
  { left: '80%', top: '34%', size: 1.2, duration: 19.8, delay: 1.6, opacity: 0.25 },
  { left: '85%', top: '66%', size: 1.1, duration: 23.6, delay: 4.7, opacity: 0.22 },
  { left: '87%', top: '22%', size: 1.2, duration: 18.3, delay: 2.8, opacity: 0.24 },
  { left: '91%', top: '42%', size: 1.1, duration: 20.9, delay: 6.1, opacity: 0.21 },
  { left: '93%', top: '8%', size: 1.2, duration: 17.8, delay: 1.4, opacity: 0.23 },
  { left: '96%', top: '62%', size: 1.1, duration: 22.7, delay: 3.9, opacity: 0.22 },
]

function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="background-glow" />
      <div className="background-grid" />
      <div className="background-stars">
        {floatingParticles.map((star, index) => (
          <span
            key={`${star.left}-${index}`}
            className="background-particle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
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
