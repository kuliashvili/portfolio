"use client";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <div className="header-logo">Portfolio</div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="header-mobile">
        <div className="header-logo">Portfolio</div>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li>
                {" "}
                <a href="/">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/">About</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/">Contact</a>{" "}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
