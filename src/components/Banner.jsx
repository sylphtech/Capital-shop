import React from 'react'
import "../styles/Banner.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();
  return (
    <>
      <div className="banner">
        <div className="banner-text-container">
          <div className="banner-container">
            <h2>FASHION SALE</h2>
            <h1>Minimal Menz Style</h1>
            <p>
              Minimal Menz Style is a fashion philosophy centered on simplicity,
              functionality, and intentionality. It's about curating a wardrobe of
              high-quality, versatile essentials that can be mixed and matched
              effortlessly. The core principle is "less is more," focusing on
              clean lines, a muted color palette, and a lack of excessive
              ornamentation. This approach to style results in a look that is
              timeless, sophisticated, and quietly confident.
            </p>
            <input type="button" value="SHOP NOW" onClick={() => navigate('/shop')} />
          </div>
        </div>

        <div className="button-container">
          <button className='left'>
            <FaArrowAltCircleLeft />
          </button>
          <button className='right'>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </>
  );
}
