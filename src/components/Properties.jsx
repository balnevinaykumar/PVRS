import React, { useState } from 'react'
import '../styles.css'

const properties = [
  {
    id: 1,
    name: 'Rosewood Villa',
    address: '12 Rosewood Lane, Mumbai',
    priceINR: 12500000,
    rating: 4.6,
    images: [
      'https://picsum.photos/id/1018/800/500',
      'https://picsum.photos/id/1025/800/500'
    ],
    docs: ['/house-docs/house1-doc.txt']
  },
  {
    id: 2,
    name: 'Green Acres Bungalow',
    address: '7 Green Acres, Bengaluru',
    priceINR: 9800000,
    rating: 4.3,
    images: [
      'https://picsum.photos/id/1016/800/500',
      'https://picsum.photos/id/1027/800/500'
    ],
    docs: ['/house-docs/house2-doc.txt']
  },
  {
    id: 3,
    name: 'Lakeside Residency',
    address: '88 Lakeside Drive, Pune',
    priceINR: 7200000,
    rating: 4.1,
    images: [
      'https://picsum.photos/id/1003/800/500'
    ],
    docs: ['/house-docs/house3-doc.txt']
  }
]

function formatINR(n){
  return n.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits:0 })
}

export default function Properties(){
  const [active, setActive] = useState(null)

  return (
    <section className="properties" id="properties">
      <div className="container">
        <h2>Buying & Selling — Properties</h2>
        <p className="lead">Browse sample properties. Click a card to view images and documents.</p>

        <div className="property-grid">
          {properties.map(p=> (
            <article className="property-card" key={p.id} onClick={()=>setActive(p)}>
              <div className="thumb" style={{backgroundImage:`url(${p.images[0]})`}} aria-hidden />
              <div className="meta">
                <h3>{p.name}</h3>
                <div className="addr">{p.address}</div>
                <div className="price">{formatINR(p.priceINR)}</div>
                <div className="rating">{p.rating} ★</div>
                <button className="btn" onClick={(e)=>{ e.stopPropagation(); setActive(p)}}>View</button>
              </div>
            </article>
          ))}
        </div>

        {active && (
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-inner">
              <button className="modal-close" onClick={()=>setActive(null)}>Close</button>
              <h3>{active.name}</h3>
              <div className="modal-grid">
                <div className="modal-images">
                  {active.images.map((src, i) => (
                    <div key={i} className="modal-image-item">
                      <a href={src} target="_blank" rel="noreferrer">
                        <img src={src} alt={`${active.name} ${i+1}`} />
                      </a>
                      <a className="download-link" href={src} download>{`Download image ${i+1}`}</a>
                    </div>
                  ))}
                </div>
                <div className="modal-docs">
                  <h4>Documents</h4>
                  {active.docs.map((d, i) => (
                    <div key={i} className="doc-row">
                      <a href={d} download>{`Download document ${i+1}`}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
