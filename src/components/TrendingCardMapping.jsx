import React from "react";
import "../styles/TrendingCard.css";

export default function TrendingCardMapping({ trendingcard }) {
  return (
    <div
      className="trendingcard"
      style={{ backgroundImage: `url(${trendingcard.image})` }}
    >
      <div className="trendingcard-name">
        {trendingcard.name}
        <div className="trendingcard-prices">
          <span className="trendingcard-price">{trendingcard.price || "N/A"}</span>{" "}
          <span className="trendingcard-oldprice">{trendingcard.oldPrice || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
