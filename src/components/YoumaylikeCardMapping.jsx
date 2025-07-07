import React from 'react';
import '../styles/Youmaylike.css';

export default function YoumaylikeCardMapping({ youmaylikecard }) {
  return (
    <div className="youmaylike-card">
      <img src={youmaylikecard.image} alt={youmaylikecard.name} className="youmaylike-card-img" />
      <div className="youmaylike-card-info">
        <h3>{youmaylikecard.name}</h3>
        <div className="youmaylike-card-prices">
          <span className="youmaylike-card-price">{youmaylikecard.price}</span>
          <span className="youmaylike-card-oldprice">{youmaylikecard.oldPrice}</span>
        </div>
      </div>
    </div>
  );
}
