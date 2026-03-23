import React from 'react'

export default function Reviews(){
  const reviews = [
    {name:'James Harrington', role:'CEO - LogoIpsum', quote:'Our AI-driven voice assistant developed by Auralis now handles all incoming customer support queries instantly, 24/7.', img:'https://framerusercontent.com/images/fivxG3PMVY39xwbNhCrAyXWcuQ.jpeg?scale-down-to=512'},
    {name:'Emma Castillo', role:'Founder - LogoIpsum', quote:'Auralis automated a large part of our workflows, resulting in a significant increase in productivity and a huge decrease in cost.', img:'https://framerusercontent.com/images/P9X3S4s8LpHIo3brnqvPdgpSSM.jpeg?scale-down-to=512'}
  ]
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2>Here's what our clients say</h2>
        <div className="reviews-grid">
          {reviews.map((r, idx)=> (
            <blockquote className={`review-card fade-up animate-delay-${(idx%2)+1}`} key={r.name}>
              <div className="review-body">{r.quote}</div>
              <div className="review-meta">
                <img src={r.img} alt={r.name} className="review-avatar" />
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-role">{r.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
