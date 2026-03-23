import React from 'react'

export default function FAQ(){
  const q = [
    'What makes Auralis unique?',
    'Is my company a good fit for Auralis?',
    'How does your subscription model work?'
  ]
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>FAQ</h2>
        <div className="faq-list">
          {q.map((t,i)=> (
            <details key={i} className="faq-item">
              <summary>{t}</summary>
              <p>Answer for: {t}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
