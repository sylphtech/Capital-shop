import React from 'react'
import "../styles/Trending.css"

export default function Trending() {
  return (
    <div className="trending-container">
      <div className="trending-h2">
        <h2>Trending This Week</h2>
      </div>

      <div className="trending-title">
        <li style={{color:"red"}}>Men</li>
        <li>Women</li>
        <li>Baby</li>
        <li>Fashion</li>
      </div>
      <div className="line"></div>
    </div>
  )
}
