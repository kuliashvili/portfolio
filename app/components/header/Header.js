"use client";
import "./Header.css";
import { useState } from "react";
import BurgerMenu from "../../assets/burger-menu.svg";
import BurgerClose from "../../assets/burger-close.svg";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
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
          <ul className="header-nav-list">
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
        <div className="header-socials">
          <a
            className="header-socials-item"
            href="https://github.com/kuliashvili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GithubIcon}
              width={30}
              height={30}
              alt="Github Icon"
            ></Image>
          </a>
          <a
            className="header-socials-item"
            href="https://www.linkedin.com/in/kuliashvili/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedinIcon}
              width={30}
              height={30}
              alt="Linkedin Icon"
            ></Image>
          </a>
        </div>
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
              <a href="/about">About</a>{" "}
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
