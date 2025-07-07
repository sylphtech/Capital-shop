import React from 'react';
import LatestnewsCardMapping from './LatestnewsCardMapping';
import '../styles/Latestnews.css';

const newsList = [
  {
    image: 'images/redbottle.png',
    title: 'Summer Collection Launch',
    desc: `Discover our new summer arrivals and exclusive offers for a limited time only! This season, we are introducing a variety of vibrant colors, lightweight fabrics, and eco-friendly materials. Our designers have worked tirelessly to bring you the latest trends while ensuring comfort and sustainability. Whether you're looking for casual wear or something more formal, our summer collection has something for everyone. Shop now and enjoy special discounts on selected items. Don't miss out on the opportunity to refresh your wardrobe with our hottest picks!`,
    date: 'July 1, 2025',
  },
  {
    image: 'images/shoes.png',
    title: 'Fashion Week Recap',
    desc: `Highlights and trends from the latest fashion week event in Paris. The runway was filled with bold patterns, oversized silhouettes, and a return to classic tailoring. Designers showcased their creativity with unique accessories and innovative layering techniques. Our team was on the ground to capture the best moments and interview top industry insiders. Read more to get an in-depth look at the standout collections and what to expect in the coming seasons.`,
    date: 'June 25, 2025',
  },
  {
    image: 'images/greensmallbottle.png',
    title: 'Sustainable Materials',
    desc: `Learn how we are making our products more eco-friendly and sustainable. Our commitment to the environment drives us to source organic cotton, recycled polyester, and biodegradable packaging. We partner with ethical factories and support fair labor practices. This article explores our journey towards sustainability, the challenges we face, and the positive impact we aim to achieve. Click to read the full story and join us in making fashion greener.`,
    date: 'June 15, 2025',
  },
];

export default function Latestnews() {
  const [expandedIdx, setExpandedIdx] = React.useState(null);
  return (
    <div className="latestnews-container">
      {newsList.map((news, idx) => (
        <LatestnewsCardMapping
          news={news}
          key={idx}
          showFull={expandedIdx === idx}
          onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
