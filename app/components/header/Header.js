"use client";
import "./Header.css";
import { useState } from "react";
import BurgerMenu from "../../../public/assets/burger-menu.svg";
import BurgerClose from "../../../public/assets/burger-close.svg";
import GithubIcon from "../../../public/assets/github.svg";
import LinkedinIcon from "../../../public/assets/linkedin.svg";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header line-animate bottom line-1">
      <div className="header-desktop">
        <div className="header-logo">
          {/* <a className="header-logo-image" href="/">
            <Image src={Logo} width={30} height={30} alt="Logo"></Image>
          </a> */}
          <Link className="header-logo-image" href="/">
            <Image src={Logo} width={30} height={30} alt="Logo"></Image>
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-socials">
          <Link
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
          </Link>
          <Link
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
          </Link>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-logo">
          <Link className="header-logo-image" href="/">
            <Image src={Logo} width={30} height={30} alt="Logo"></Image>
          </Link>
        </div>
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
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
