import React from 'react';
import Newletter from './Newletter';
import Testimonial from './Testimonial';
import Feature from './Feature';
import Hero from './Hero';
export default function Main() {
  return (
    <main>
      <section className="hero">
        <Hero/>
      </section>
      <section className="features section">
        <Feature />
      </section>
      <section className="testimonials section">
        <Testimonial />
      </section>
      <section className="newsletter section text-light">
        <Newletter />
      </section>
    </main>

  )
}
