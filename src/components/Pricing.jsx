import React from 'react'

export default function Pricing() {
  const plans = [
    { name: 'Freemium', price: '₹ 0', note: 'INR / month' },
    { name: 'Professional', price: '₹ 2000', note: 'INR / month' },
    { name: 'Enterprise', price: 'Custom', note: 'INR / month' },
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="pricing-lead">
          Three flexible plans designed to fit your needs, whether you are just starting with AI and
          automations or scaling advanced solutions.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, idx) => {
            const features = idx === 0
              ? [
                  '1 dedicated developer',
                  'Custom workflow automations',
                  'AI business consulting',
                  'Chatbot and LLM development',
                  'Voice assistant development',
                  'Cancel and pause anytime',
                ]
              : idx === 1
                ? [
                    '2 dedicated developers',
                    'Custom workflow automations',
                    'AI business consulting',
                    'Chatbot and LLM development',
                    'Voice assistant development',
                    'Cancel and pause anytime',
                  ]
                : [
                    'Dedicated product squad',
                    'Custom workflow automations',
                    'AI business consulting',
                    'Chatbot and LLM development',
                    'Voice assistant development',
                    'Priority support and delivery',
                  ]

            return (
              <div className={`plan ${idx === 1 ? 'featured' : ''}`} key={plan.name}>
                {idx === 1 && <div className="overlay" aria-hidden />}
                <div className="plan-head">
                  <h3>{plan.name}</h3>
                </div>

                <div className="price">
                  {plan.price} <span className="note">{plan.note}</span>
                </div>
                <p className="plan-desc">
                  {idx === 0
                    ? 'For organizations looking to get started with AI and automations.'
                    : idx === 1
                      ? 'For organizations looking to unlock the full power of AI and automations.'
                      : 'For larger organizations requiring advanced AI solutions.'}
                </p>

                <div className="plan-cta">
                  <a className="btn primary" href="#contact">
                    Book a call
                  </a>
                </div>

                <div className="plan-divider">
                  <span className="star">✦</span>
                </div>
                <ul className="plan-features">
                  {features.map((feature) => (
                    <li key={feature}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="check">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
