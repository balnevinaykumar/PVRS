import React from 'react'

export default function FloatingCTA() {
  return (
    <div className="floating-cta" aria-hidden>
      <a className="floating-cta-btn" href="#contact">
        Buy template <span className="arrow">↗</span>
      </a>
      <div className="floating-badge">Made in Framer</div>
    </div>
  )
}
