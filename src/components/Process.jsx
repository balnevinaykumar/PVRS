import React from 'react'

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container process-grid">
        <div className="process-left">
          <h2 className="section-title">Our process</h2>
          <p className="lead">
            We start by analyzing your workflows to identify tasks AI can automate and optimize. Next,
            we develop and integrate AI solutions into your systems and continue refining them for
            better results.
          </p>
        </div>

        <div className="process-preview">
          <div className="preview-shell">
            <div className="preview-top">Your business › Workflow analysis</div>
            <div className="integration-rail">
              <div className="integration-card small">Notion</div>
              <div className="integration-card large">Zapier</div>
              <div className="integration-card small">OpenAI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
