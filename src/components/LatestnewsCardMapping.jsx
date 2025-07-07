import React from 'react';
import '../styles/Latestnews.css';

export default function LatestnewsCardMapping({ news, showFull, onToggle }) {
  const shortDesc = news.desc.length > 120 ? news.desc.slice(0, 120) + '...' : news.desc;

  return (
    <div className="latestnews-card">
      <img src={news.image} alt={news.title} className="latestnews-card-img" />
      <div className="latestnews-card-info">
        <h3>{news.title}</h3>
        <p className="latestnews-card-desc">
          {showFull ? news.desc : shortDesc}
        </p>
        {news.desc.length > 120 && (
          <button className="latestnews-readmore-btn" onClick={onToggle}>
            {showFull ? 'Show Less' : 'Read More'}
          </button>
        )}
        <span className="latestnews-card-date">{news.date}</span>
      </div>
    </div>
  );
}
