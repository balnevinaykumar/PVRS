import React from 'react'

export default function Services(){
  const items = [
    {title:'Chatbot Development', body:'Advanced AI-driven chatbots to automate support.'},
    {title:'Voice Assistants', body:'Voice assistants for inbound/outbound call handling.'},
    {title:'Workflow Automations', body:'Connect apps to eliminate repetitive tasks.'},
    {title:'AI Consulting', body:'Identify automation opportunities and scale AI.'}
  ]
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-grid">
          {items.map((i, idx)=> (
            <article key={i.title} className={`service-card fade-up animate-delay-${(idx%3)+1}`}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
