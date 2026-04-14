import React, { useState } from 'react'

export default function Industries() {
  const list = ['E-commerce', 'Real Estate', 'Legal', 'Finance', 'Healthcare']
  const [active, setActive] = useState(0)

  return (
    <section id="industries" className="industries">
      <div className="container industries-inner">
        <h2 className="section-title">Industries we work with</h2>
        <p className="industries-lead">
          Hear the success stories of the businesses we&apos;ve helped thrive with AI. We work across a
          variety of industries and tailor each workflow to the team using it.
        </p>

        <div className="industries-row">
          {list.map((label, idx) => (
            <button key={label} className={`industry-btn ${idx === active ? 'active' : ''}`} onClick={() => setActive(idx)}>
              <span className="industry-label">{label}</span>
            </button>
          ))}
        </div>

        <div className="industry-underline">
          <div className="underline-bar" style={{ transform: `translateX(${active * 116}px)` }} />
        </div>
      </div>
    </section>
  )
}
