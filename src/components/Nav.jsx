import React, { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="site-nav">
      <div className="container nav-shell">
        <div className="nav-inner slide-in">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden>
              ✦
            </span>
            <span>PVRS</span>
          </a>

          <button
            className="nav-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Get template
          </a>
        </div>
      </div>
    </nav>
  )
}
