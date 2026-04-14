import React from 'react'

const trustLogos = ['IPSUM', 'LOOO', 'Logoipsum', 'LOGO']

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-noise" aria-hidden />
      <div className="container hero-shell">
        <div className="hero-inner fade-up animate-delay-1">
          <h1>We elevate your business using Artificial Intelligence.</h1>
          <p>
            We elevate and grow organizations using top-tier Artificial Intelligence solutions.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="#services">
              Our services
            </a>
            <a className="btn primary" href="#contact">
              Book a call <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="trust-strip fade-up animate-delay-3">
          <p className="trust-label">You&apos;re in good company</p>
          <div className="trust-logos" aria-label="Client logos">
            {trustLogos.map((logo) => (
              <span key={logo} className="trust-logo">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
