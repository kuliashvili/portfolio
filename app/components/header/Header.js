"use client";
import "./Header.css";
import { useState } from "react";
import BurgerMenu from "../../assets/burger-menu.svg";
import BurgerClose from "../../assets/burger-close.svg";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <div className="header-desktop">
        <div className="header-logo">Portfolio</div>
        <nav className="header-nav">
          <ul>
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-mobile">
        <div className="header-logo">Portfolio</div>
        <button className="burger-menu" onClick={toggleMenu}>
          <Image
            src={BurgerMenu}
            width={25}
            height={25}
            alt="Burger Menu Icon"
          ></Image>
        </button>

        <nav className={`mobile-nav ${isMenuOpen ? "open" : "closed"}`}>
          <button className="burger-close-menu" onClick={toggleMenu}>
            <Image
              src={BurgerClose}
              width={20}
              height={20}
              alt="Burger Close Menu Icon"
            ></Image>
          </button>
          <ul className="mobile-nav-links">
            <li className="nav-item">
              <a href="/">Home</a>{" "}
            </li>
            <li className="nav-item">
              <a href="/">About</a>{" "}
            </li>
            <li className="nav-item">
              <a href="/">Contact</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
