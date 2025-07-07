import React from 'react';
import '../styles/Card.css';
import TrendingCardMapping from './TrendingCardMapping';

const trandingcard = [
  {
    image: "images/1.png",
    name: "Blue Outfit",
    price: "$89.00",
    oldPrice: "$130.00",
  },
  {
    image: "images/2.png",
    name: "Pink Outfit",
    price: "$105.00",
    oldPrice: "$125.00",
  },
  {
    image: "images/3.png",
    name: "Red Shirt",
    price: "$120.00",
    oldPrice: "$140.00",
  },
  {
    image: "images/4.png",
    name: "Green Bottle",
    price: "$95.00",
    oldPrice: "$110.00",
  },
];

export default function TrendingCard() {
  return (
    <div className="trendingcard-container">
      {trandingcard.map((trendingcard, index) => (
        <TrendingCardMapping
          trendingcard={trendingcard}
          key={index}
        />
      ))}
    </div>
  );
}
