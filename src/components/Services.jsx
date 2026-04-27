import React from 'react'

const services = [
  {
    title: 'Chatbot Development',
    body:
      'We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.',
    demo: 'chatbot',
    prompt: 'Please create a graph of the profits in this file',
    reply: "Of course! Here's a graph based on the profits in the file you provided.",
    bars: [36, 46, 58, 42, 82, 48, 62, 38],
  },
  {
    title: 'Voice Assistants',
    body:
      'We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.',
    demo: 'voice',
  },
  {
    title: 'Workflow Automations',
    body:
      'We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.',
    demo: 'automation',
    steps: [
      'New Framer form submission',
      'Format & clean lead data in Zapier',
      'Add lead to Airtable database',
    ],
  },
  {
    title: 'AI Consulting',
    body:
      'We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.',
    demo: 'consulting',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    points: [40, 58, 52, 74, 88, 92],
  },
]

function ChatbotDemo({ service }) {
  return (
    <div className="service-demo service-demo-chatbot">
      <div className="demo-frame">
        <div className="chatbot-shell">
          <div className="chatbot-top">
            <div className="chatbot-userline">
              <span className="chatbot-avatar" />
              <span className="chatbot-user">You:</span>
            </div>

            <div className="chatbot-request">
              <span>{service.prompt}</span>
              <span className="chatbot-file-icon" aria-hidden="true">
                <span className="chatbot-file-corner" />
              </span>
            </div>
          </div>

          <div className="chatbot-bottom">
            <div className="chatbot-assistantline">
              <span className="chatbot-spark" aria-hidden="true">
                ✦
              </span>
              <span>AI Assistant</span>
            </div>

            <div className="chatbot-graph">
              {service.bars.map((value, index) => (
                <span key={`${service.title}-${index}`} className="chatbot-graph-bar">
                  <span
                    className={`chatbot-graph-fill ${index === 4 ? 'is-active' : ''}`}
                    style={{ height: `${value}%` }}
                  />
                </span>
              ))}
            </div>

            <div className="chatbot-reply-wrap">
              <div className="chatbot-reply">{service.reply}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VoiceDemo() {
  const leftBars = [44, 52, 70, 88, 64, 56, 74, 48, 60, 84, 68, 50]
  const rightBars = [48, 62, 76, 90, 68, 54, 80, 60, 72, 86, 58, 46]

  return (
    <div className="service-demo service-demo-voice">
      <div className="demo-frame voice-demo-frame">
        <div className="voice-dot-grid" />
        <div className="voice-band voice-band-left">
          {leftBars.map((value, index) => (
            <span key={`voice-left-${index}`} className="voice-band-bar" style={{ height: `${value}%` }} />
          ))}
        </div>
        <div className="voice-center">
          <span className="voice-center-ring voice-center-ring-outer" />
          <span className="voice-center-ring voice-center-ring-inner" />
          <span className="voice-center-core">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 15a3 3 0 0 0 3-3V8a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3Zm5-3a1 1 0 1 1 2 0 7 7 0 0 1-6 6.93V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.07A7 7 0 0 1 5 12a1 1 0 1 1 2 0 5 5 0 1 0 10 0Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="voice-band voice-band-right">
          {rightBars.map((value, index) => (
            <span key={`voice-right-${index}`} className="voice-band-bar" style={{ height: `${value}%` }} />
          ))}
        </div>
        <div className="voice-demo-label">Voice Assistant</div>
      </div>
    </div>
  )
}

function AutomationDemo({ service }) {
  const icons = ['✦', '✳', '◈']

  return (
    <div className="service-demo service-demo-automation">
      <div className="demo-frame automation-demo-frame">
        <div className="automation-rail" />
        {service.steps.map((step, index) => (
          <div key={step} className={`automation-step automation-step-${index + 1}`}>
            <span className="automation-icon">{icons[index]}</span>
            <span className="automation-index">{index + 1}.</span>
            <span className="automation-text">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsultingDemo({ service }) {
  return (
    <div className="service-demo service-demo-consulting">
      <div className="demo-frame consulting-demo-frame">
        <div className="consulting-grid">
          {service.months.map((month, index) => (
            <div key={month} className="consulting-column">
              <span className="consulting-column-line" />
              <span className="consulting-month">{month}</span>
              <span
                className={`consulting-point consulting-point-${index + 1}`}
                style={{ bottom: `${service.points[index]}px` }}
              />
            </div>
          ))}
        </div>

        <div className="consulting-label consulting-label-top">Efficiency +46%</div>
        <div className="consulting-label consulting-label-bottom">Cost -11%</div>
      </div>
    </div>
  )
}

function ServiceDemo({ service }) {
  if (service.demo === 'chatbot') return <ChatbotDemo service={service} />
  if (service.demo === 'voice') return <VoiceDemo />
  if (service.demo === 'automation') return <AutomationDemo service={service} />
  return <ConsultingDemo service={service} />
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container services-shell">
        <span className="section-eyebrow">Services</span>
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className={`service-tile fade-up animate-delay-${(index % 3) + 1}`}>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <ServiceDemo service={service} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
