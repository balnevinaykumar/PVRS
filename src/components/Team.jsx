import React from 'react'
import daniel from '../assets/team-daniel.jpg'
import ethan from '../assets/team-ethan.jpg'
import liam from '../assets/team-liam.jpg'
import emily from '../assets/team-emily.jpg'

export default function Team(){
  const members = [
    {name:'Daniel Foster',role:'CEO', img:daniel},
    {name:'Ethan Walker',role:'Sales', img:ethan},
    {name:'Liam Parker',role:'Developer', img:liam},
    {name:'Emily Carter',role:'CCO', img:emily}
  ]
  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Meet the team</h2>
        <div className="team-grid">
          {members.map((m, idx)=> (
            <div className={`member fade-up animate-delay-${(idx%3)+1}`} key={m.name}>
              <div className="avatar" aria-hidden>
                <img src={m.img} alt={m.name} className="avatar-img" />
              </div>
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
