import React from 'react'

export default function Pricing(){
  const plans = [
    {name:'Basic',price:'$997',note:'/month'},
    {name:'Professional',price:'$3997',note:'/month'},
    {name:'Enterprise',price:'Custom',note:'/month'}
  ]
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          {plans.map(p=> (
            <div className="plan" key={p.name}>
              <h3>{p.name}</h3>
              <div className="price">{p.price} <span className="note">{p.note}</span></div>
              <button className="btn">Book a call</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
