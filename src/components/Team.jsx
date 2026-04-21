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
    {name:'Emily Carter',role:'CCO', img:emily},
    {name:'Sophia Scott',role:'Marketing', img:emily},
    {name:'Lucas Gray',role:'Developer', img:liam},
    {name:'Michael Thornton',role:'CTO', img:liam},
    {name:'Olivia Hayes',role:'Design', img:emily},
    {name:'Ryan Cooper',role:'Developer', img:ethan},
  ]
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-eyebrow">Team</div>
        <h2 className="section-title team-title">Meet the team</h2>
        <div className="team-list">
          {Array.from({ length: Math.ceil(members.length / 3) }, (_, rowIndex) => {
            const rowMembers = members.slice(rowIndex * 3, rowIndex * 3 + 3)
            return (
              <div className="team-row" key={`row-${rowIndex}`}>
                {rowMembers.map((m, idx) => (
                  <div className={`team-member fade-up animate-delay-${(idx%3)+1}`} key={`${m.name}-${idx}`}>
                    <div className="team-row-main">
                      <div className="team-avatar-wrap" aria-hidden>
                        <img src={m.img} alt={m.name} className="team-avatar" />
                      </div>
                      <h4>{m.name}</h4>
                      <span className="team-badge">{m.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
