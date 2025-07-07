import React from 'react';
import '../styles/Card.css';
import ProductCard from './ProductCard';

const products = [
  {
    name: "Men's Fashion T-Shirt",
    image: "images/redshirt.jfif"
  },

  {
    name: "Women's Fashion Dress",
    image: "../images/brownbag.jfif"
  },

  {
    name: "Baby's Cute Outfit",
    image: "../images/pinkoutfit.png"
  },
];

export default function Card() {
  return (
    <div className="card-container">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}
