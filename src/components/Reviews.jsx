import React from 'react'
import emma from '../assets/review-emma.jpg'
import james from '../assets/review-james.jpg'

export default function Reviews() {
  const reviews = [
    {
      brand: 'TechCorp',
      quote:
        'Our AI-driven voice assistant developed by PVRS now handles all incoming customer support queries instantly, 24/7.',
      author: 'James Harrington',
      role: 'CEO - TechCorp',
      image: james,
    },
    {
      brand: 'CloudStart',
      quote:
        'PVRS automated a large part of our workflows, resulting in a significant increase in productivity and a huge decrease in cost.',
      author: 'Emma Castillo',
      role: 'Founder - CloudStart',
      image: emma,
      featured: true,
    },
    {
      brand: 'DataMinds',
      quote:
        'PVRS AI consulting helped us redesign operations and reduce manual work. We would highly recommend their team.',
      author: 'Liam Bennett',
      role: 'CTO - DataMinds',
      image: james,
    },
  ]

  const trackReviews = [...reviews, ...reviews]

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-eyebrow">Reviews</div>
        <h2 className="section-title">Here&apos;s what our clients say</h2>
        <p className="reviews-lead">
          Hear the success stories of the businesses we&apos;ve helped thrive with AI.
        </p>

        <div className="reviews-marquee">
          <div className="reviews-track">
            {trackReviews.map((review, index) => (
              <article key={`${review.author}-${review.brand}-${index}`} className={`review-card ${review.featured ? 'featured' : ''}`}>
                <div className="review-brand">{review.brand}</div>
                <p className="review-quote">&quot;{review.quote}&quot;</p>
                <div className="review-footer">
                  <div className="review-person">
                    <img src={review.image} alt={review.author} className="review-avatar" />
                    <div>
                      <div className="review-author">{review.author}</div>
                      <div className="review-role">{review.role}</div>
                    </div>
                  </div>
                  <div className="review-link">in</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
