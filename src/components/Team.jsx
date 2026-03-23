import React from 'react'

export default function Team(){
  const members = [
    {name:'Daniel Foster',role:'CEO', img:'https://framerusercontent.com/images/LMHHOuZ2Gf6ITDH0kgxvm6mzclQ.jpeg?scale-down-to=512'},
    {name:'Ethan Walker',role:'Sales', img:'https://framerusercontent.com/images/zLsRpzTOydN0lZDv0Y9nOnXUhE.jpeg?scale-down-to=512'},
    {name:'Liam Parker',role:'Developer', img:'https://framerusercontent.com/images/ydtQD6o8DeCWexskC8hHuHy7Hw.jpeg?scale-down-to=512'},
    {name:'Emily Carter',role:'CCO', img:'https://framerusercontent.com/images/43ni9PGsRtjf3qW4LcpsCgS3k.jpeg?scale-down-to=512'}
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
