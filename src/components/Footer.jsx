import React from 'react'
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi"; 

const Footer = () => {
  return (
    <>
      <div className="info-section">
        <div className="info-card">
          <img src="/public/images/services1.svg" alt="" />
          <h3>Fast & Free Delivery</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div className="info-card">
          <img src="/public/images/services2.svg" alt="" />
          <h3>Secure Payment</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div className="info-card">
          <img src="/public/images/services3.svg" alt="" />
          <h3>Money Back Guarantee</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div className="info-card">
          <img src="/public/images/services4.svg" alt="" />
          <h3>Online Support</h3>
          <p>Free delivery on all orders</p>
        </div>
      </div>

          <footer className="footer-container">
      <div className="main-footer">
        <div className="newsletter-section">
          <h2>Subscribe Newsletter</h2>
          <p>Subscribe newsletter to get 5% on all products.</p>
        </div>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>
            Subscribe <FiSend />
          </button>
        </div>
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-links-section">
        <div className="brand-section">
            <img src="/public/images/logo2.png" alt="Brand Logo" />
        </div>
        <div className="links-column">
          <h3>Shop Men</h3>
          <ul>
            <li>
              <a href="#">Clothing Fashion</a>
            </li>
            <li>
              <a href="#">Winter</a>
            </li>
            <li>
              <a href="#">Summer</a>
            </li>
            <li>
              <a href="#">Formal</a>
            </li>
            <li>
              <a href="#">Casual</a>
            </li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Shop Women</h3>
          <ul>
            <li>
              <a href="#">Clothing Fashion</a>
            </li>
            <li>
              <a href="#">Winter</a>
            </li>
            <li>
              <a href="#">Summer</a>
            </li>
            <li>
              <a href="#">Formal</a>
            </li>
            <li>
              <a href="#">Casual</a>
            </li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Baby Collection</h3>
          <ul>
            <li>
              <a href="#">Clothing Fashion</a>
            </li>
            <li>
              <a href="#">Winter</a>
            </li>
            <li>
              <a href="#">Summer</a>
            </li>
            <li>
              <a href="#">Formal</a>
            </li>
            <li>
              <a href="#">Casual</a>
            </li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Carrier</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright-section">
        <p>
          Copyright ©2025 All rights reserved | This template is made with ❤️ by{" "}
          <a href="#">Kodexx Texk</a>
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;