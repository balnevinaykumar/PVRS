import React from 'react'
import footerLogo from '../assets/footer-logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={footerLogo} alt="PVRS" style={{ height: 28 }} />
          <div>PVRS - We elevate businesses with AI</div>
        </div>
        <div className="legal">© {new Date().getFullYear()} PVRS. All rights reserved.</div>
      </div>
    </footer>
  )
}
