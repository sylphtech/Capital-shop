import React from 'react'
import '../styles/Testmonial.css';
const testimoniaimage = "/images/wearingglass.png";

export default function Testmonial() {
  return (
    <div className='testmonial-container'>
      <div className="testmonial-h2">
        <h2>Customer Testmonial</h2>
      </div>
      <div className="testmonial-p">
        <p>Everybidy is different, which is why we offer styles for every body. 
      Whether you’re looking for a classic fit or something more modern, we have the perfect pair of jeans for you. Our jeans are designed to fit and flatter every body type, so you can feel confident and comfortable in your own skin. From high-waisted to low-rise, we have a style that will suit your needs. Plus, our jeans are made with high-quality materials that will last for years to come. So why wait? Find your perfect pair of jeans today!
        </p>
        <div className="image-tect" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <img src={testimoniaimage} alt="Testimonial" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
          <div className="text">
            <h3 style={{ margin: 0 }}>Kodexx Texk</h3>
            <p style={{ margin: 0, color: '#888' }}>Designed at Kodexx Texk </p>
          </div>
        </div>
      </div>
    </div>
  )
}
