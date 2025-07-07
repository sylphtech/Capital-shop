// import React, { useState } from 'react';
import './Shop.css';

const products = [
  { id: 1, name: 'Product 1', price: 25, image: '/public/images/1.png' },
  { id: 2, name: 'Product 2', price: 30, image: '/public/images/2.png' },
  { id: 3, name: 'Product 3', price: 20, image: '/public/images/3.png' },
  { id: 4, name: 'Product 4', price: 40, image: '/public/images/4.png' },
  // Add more products as needed
];

const Shop = ({ onAddToCart }) => {
  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <div className="shop-products">
        {products.map(product => (
          <div className="shop-product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="shop-product-img" />
            <div className="shop-product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
