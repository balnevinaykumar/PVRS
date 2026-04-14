import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  function validate(values) {
    const nextErrors = {}
    if (!values.first || values.first.trim().length < 2) nextErrors.first = 'Enter your first name (min 2 chars)'
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email'
    if (!values.message || values.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters'
    return nextErrors
  }

  function saveToLocal(data) {
    try {
      const key = 'contact_submissions'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      existing.unshift({ ...data, submittedAt: new Date().toISOString() })
      localStorage.setItem(key, JSON.stringify(existing))
    } catch (error) {
      console.warn('localStorage save failed', error)
    }
  }

  async function submit(event) {
    event.preventDefault()
    setStatus(null)
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setLoading(true)
    saveToLocal(form)

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('thanks')
        setForm({ first: '', last: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="contact contact-center">
      <div className="container contact-shell">
        <div className="contact-copy">
          <h1 className="section-title">Get in touch</h1>
          <p>
            Tell us about your workflow, goals, and the kind of AI support you want to build. We will
            get back to you with the right next step.
          </p>
        </div>

        <form className="contact-form animated" onSubmit={submit} noValidate>
          <div className="row">
            <div style={{ flex: 1 }}>
              <input className={errors.first ? 'error' : ''} placeholder="First name" value={form.first} onChange={(event) => setForm({ ...form, first: event.target.value })} />
              {errors.first && <div className="field-error">{errors.first}</div>}
            </div>
            <div style={{ flex: 1 }}>
              <input placeholder="Last name" value={form.last} onChange={(event) => setForm({ ...form, last: event.target.value })} />
            </div>
          </div>
          <input className={errors.email ? 'error' : ''} placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          {errors.email && <div className="field-error">{errors.email}</div>}
          <input placeholder="Phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
          <textarea className={errors.message ? 'error' : ''} placeholder="Tell us what you want to automate" rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          {errors.message && <div className="field-error">{errors.message}</div>}
          <div className="contact-actions">
            <button className="btn primary" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
          </div>

          {status === 'thanks' && <div className="muted center">Thanks, we received your message.</div>}
          {status === 'error' && <div className="muted center">Something went wrong. Please try again.</div>}
        </form>
      </div>
    </section>
  )
}
