import React from 'react'

const logoSmall = 'https://framerusercontent.com/images/q2Y5TM0gdzNrTRONDeZNaxphO4.png?scale-down-to=512'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <img src={logoSmall} alt="Partner" style={{height:28}} />
          <div>Auralis — We elevate businesses with AI</div>
        </div>
        <div className="legal">© {new Date().getFullYear()} Auralis. All rights reserved.</div>
      </div>
    </footer>
  )
}
