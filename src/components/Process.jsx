import React from 'react'

export default function Process(){
  const steps = [
    'Analyze workflows to identify automation opportunities',
    'Prototype and validate solutions',
    'Deploy integrations and automations',
    'Monitor and iterate for performance'
  ]
  return (
    <section id="process" className="process">
      <div className="container">
        <h2>Our process</h2>
        <div className="process-list">
          {steps.map((s,i)=> (
            <div className="process-step" key={i}>
              <div className="step-index">{i+1}</div>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
