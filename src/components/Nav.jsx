import React, {useState} from 'react'

const logo = 'https://framerusercontent.com/images/qtI2fhFRt23dMtifGPiYLTjpTs.png?width=180&height=180'

export default function Nav(){
  const [open, setOpen] = useState(false)
  const links = [
    {label:'Services', href:'#services'},
    {label:'Process', href:'#process'},
    {label:'Industries', href:'#industries'},
    {label:'Pricing', href:'#pricing'},
    {label:'Team', href:'#team'},
    {label:'Reviews', href:'#reviews'},
    {label:'Contact', href:'#contact'}
  ]

  return (
    <nav className="site-nav">
      <div className="nav-inner slide-in">
        <div className="brand"><img src={logo} alt="Auralis logo" style={{height:34}}/></div>

        <button className="nav-toggle" aria-expanded={open} onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>

        <ul className={`nav-links ${open? 'open':''}`}>
          {links.map(l=> (
            <li key={l.href}><a href={l.href} onClick={()=>setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
