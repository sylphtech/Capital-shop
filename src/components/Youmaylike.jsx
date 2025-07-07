import React from 'react';
import YoumaylikeCardMapping from './YoumaylikeCardMapping';
import '../styles/Youmaylike.css';

const youmaylikecard = [
  {
    image: "images/5.png",
    name: "Blue Outfit",
    price: "$89.00",
    oldPrice: "$130.00",
  },
  {
    image: "images/6.png",
    name: "Pink Outfit",
    price: "$105.00",
    oldPrice: "$125.00",
  },
  {
    image: "images/7.png",
    name: "Red Shirt",
    price: "$120.00",
    oldPrice: "$140.00",
  },
  {
    image: "images/8.png",
    name: "Green Bottle",
    price: "$95.00",
    oldPrice: "$110.00",
  },
];

export default function Youmaylike() {
  return (
    <>
        <div className="youmaylike-h2" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>You May Also Like</h2>
            </div>
    <div className="youmaylike-container">
      {youmaylikecard.map((card, index) => (
          <YoumaylikeCardMapping youmaylikecard={card} key={index} />
        ))}
    </div>
        </>
  );
}
