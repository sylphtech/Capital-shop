import React from 'react'
import "../styles/Navber.css";
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";

export default function Navber({ cartCount = 0 }) {
  return (
    <div className="-Navber-container">
      <div className="navber-logo">
        <img src="/images/logo2.png" alt="Logo" className="h-12" />
      </div>

      <div className="navber-links">
        <a href="/" className="navber-link">
          Home
        </a>
        <a href="/men" className="navber-link">
          Men
        </a>
        <a href="/women" className="navber-link">
          Women
        </a>
        <a href="/baby collection" className="navber-link">
          Baby Collection
        </a>

        <div className="baby-new-message">
          <FaRegMessage/>        
        </div>

        <a
          href="/page"
          className="navber-link"
          style={{ alignItems: "center", display: "flex", gap: "10px" }}
        >
          Page <IoIosArrowDown />
        </a>
        <a href="/blog" className="navber-link">
          Blog
        </a>
        <a href="/contact" className="navber-link">
          Contact
        </a>
      </div>

      <div className="navber-icons">
        <a href="/search" className="navber-icon">
          <CgSearch />
        </a>
        <a href="/user" className="navber-icon">
          <LuUserRound />
        </a>
        <a href="/cart" className="navber-icon">
          <BsCart3 />
        </a>
      </div>

      <div className="cart-count-number">
        <p>{cartCount}</p>
      </div>
    </div>
  );
}
