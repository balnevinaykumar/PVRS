import React from 'react'

export default function Industries(){
  const list = ['E-commerce','Real Estate','Legal','Finance','Healthcare']
  return (
    <section id="industries" className="industries">
      <div className="container">
        <h2>Industries we work with</h2>
        <div className="industry-chips">
          {list.map(i=> <span key={i} className="chip">{i}</span>)}
        </div>
      </div>
    </section>
  )
}
