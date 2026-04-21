import React from 'react'

export default function FAQ(){
  const q = [
    'What makes PVRS unique?',
    'Is my company a good fit for PVRS?',
    'How does your subscription model work?',
    'How long does the development phase take?',
    'Do you provide support after implementation?'
  ]
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-shell">
          <div className="faq-copy">
            <div className="section-eyebrow">FAQ</div>
            <h2 className="section-title faq-title">FAQ</h2>
            <p className="faq-lead">
              We&apos;ve gone ahead and answered the questions we&apos;re asked most often. Can&apos;t
              find what you&apos;re looking for? Feel free to reach out to us through the contact form above!
            </p>
          </div>

          <div className="faq-list">
          {q.map((t,i)=> (
            <details key={i} className="faq-item">
              <summary>{t}</summary>
              <p>Answer for: {t}</p>
            </details>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
