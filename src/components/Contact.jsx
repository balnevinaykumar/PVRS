import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in touch</h2>
        <form className="contact-form" onSubmit={e=>e.preventDefault()}>
          <div className="row">
            <input placeholder="First name" />
            <input placeholder="Last name" />
          </div>
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button className="btn primary">Submit</button>
        </form>
      </div>
    </section>
  )
}
