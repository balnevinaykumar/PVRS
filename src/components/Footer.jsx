import React from 'react'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>About Us</h3>
          <div className="footer-item-label">Email</div>
          <a href="mailto:hello@pvrs.com" className="footer-link">hello@pvrs.com ↗</a>
          <div className="footer-item-label">Phone</div>
          <a href="tel:+91203439223" className="footer-link">+91 20 343 9223 ↗</a>
        </div>
        <div className="footer-col">
          <h3>Links</h3>
          <a href="#services" className="footer-link">Services</a>
          <a href="#process" className="footer-link">Process</a>
          <a href="#industries" className="footer-link">Industries</a>
          <a href="#pricing" className="footer-link">Pricing</a>
          <a href="#team" className="footer-link">Team</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#faq" className="footer-link">FAQ</a>
        </div>
        <div className="footer-col">
          <h3>Social Media</h3>
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">Youtube</a>
          <a href="#" className="footer-link">X/Twitter</a>
          <a href="#" className="footer-link">Instagram</a>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>
          <a href="#" className="footer-link">Terms &amp; conditions</a>
          <a href="#" className="footer-link">Privacy policy</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="footer-bottom-left">© {new Date().getFullYear()} PVRS Inc.</div>
        <div className="footer-bottom-right">Template by PVRS</div>
      </div>
    </footer>
  )
}
