import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Nav.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="container">

    <div className="nav">
      <Link to="/" className="nav-link">About Us</Link>
      <Link to="/privacy" className="nav-link">Privacy</Link>
      <Link to="/faq" className="nav-link">FAQ</Link>
      <Link to="/careers" className="nav-link">Careers</Link>
    </div>

    <div className="nav-second">
      <Link to="My Whishlist" className="nav-link">My Wishlist</Link>
      <li>|</li>
      <Link to="/Track Your Order" className="nav-link">Track Your Order</Link>
      <li>|</li>
    
    <div className="nav-font-awesome">
      <a href="https://www.facebook.com" className="nav-link"><FaFacebook /></a>
      <a href="https://www.twitter.com" className="nav-link"><FaTwitter /></a>
      <a href="https://www.instagram.com" className="nav-link"><FaInstagram /></a>
      <a href="https://www.linkedin.com" className="nav-link"><FaLinkedin /></a>
      <a href="https://www.youtube.com" className="nav-link"><FaYoutube /></a>
    </div>
    </div>

    </div>
  )
}
