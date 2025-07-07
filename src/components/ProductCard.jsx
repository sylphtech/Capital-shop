import React from 'react';
import '../styles/Card.css';

export default function ProductCard({ product }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <div className="card-name">{product.name}</div>
    </div>
  );
}
