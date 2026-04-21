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
      <div className="container contact-wrap">
        <div className="contact-copy">
          <div className="contact-eyebrow">Contact</div>
          <h2 className="section-title">Get in touch!</h2>
          <p>
            We&apos;d love to talk about how we can integrate AI into your business. Leave us a
            message and we&apos;ll get back to you within 24 hours to schedule a call!
          </p>
        </div>

        <div className="contact-shell">
          <div className="contact-frame contact-frame-left" aria-hidden="true" />
          <div className="contact-frame contact-frame-right" aria-hidden="true" />

          <form className="contact-form animated" onSubmit={submit} noValidate>
            <div className="row">
              <label className="contact-field">
                <span>First Name</span>
                <input
                  className={errors.first ? 'error' : ''}
                  placeholder="Jane"
                  value={form.first}
                  onChange={(event) => setForm({ ...form, first: event.target.value })}
                />
              </label>
              {errors.first && <div className="field-error">{errors.first}</div>}
              <label className="contact-field">
                <span>Last Name</span>
                <input
                  placeholder="Smith"
                  value={form.last}
                  onChange={(event) => setForm({ ...form, last: event.target.value })}
                />
              </label>
            </div>

            <div className="row">
              <label className="contact-field">
                <span>Email</span>
                <input
                  className={errors.email ? 'error' : ''}
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </label>

              <label className="contact-field">
                <span>Phone</span>
                <input
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                />
              </label>
            </div>

            <label className="contact-field contact-field-full">
              <span>Message</span>
              <textarea
                className={errors.message ? 'error' : ''}
                placeholder="Hi team PVRS, I'm reaching out for..."
                rows="5"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              {errors.message && <div className="field-error">{errors.message}</div>}
            </label>

            <div className="contact-actions">
              <button className="btn primary contact-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>

            {status === 'thanks' && <div className="muted center">Thanks, we received your message.</div>}
            {status === 'error' && <div className="muted center">Something went wrong. Please try again.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
