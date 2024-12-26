"use client";
import "./Header.css";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";
import BurgerMenu from "../../../public/assets/burger-menu.svg";
import BurgerClose from "../../../public/assets/burger-close.svg";
import GithubIcon from "../../../public/assets/github.svg";
import LinkedinIcon from "../../../public/assets/linkedin.svg";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import geFlag from "@/public/assets/geflag.svg";
import enFlag from "@/public/assets/enflag.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const mobileNavRef = useRef(null);
  const burgerButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        !burgerButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header line-animate bottom line-1">
      <div className="header-desktop">
        <div className="header-logo">
          <Link className="header-logo-image" href="/">
            <Image src={Logo} width={30} height={30} alt="Logo" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-item">
              <Link href="/">{t.nav.home}</Link>
            </li>
            <li className="nav-item">
              <Link href="/about">{t.nav.about}</Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">{t.nav.portfolio}</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">{t.nav.blog}</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">{t.nav.contact}</Link>
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
            <Image src={GithubIcon} width={30} height={30} alt="Github Icon" />
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
            />
          </Link>
          <div className="header-languages">
          <button
            className="language-btn"
            onClick={() => toggleLanguage("ge")}
          >
            <Image src={geFlag} width={30} height={30} alt="Georgian flag" />
          </button>
          <button
            className="language-btn"
            onClick={() => toggleLanguage("en")}
          >
            <Image src={enFlag} width={30} height={30} alt="English flag" />
          </button>
        </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-logo">
          <Link className="header-logo-image" href="/">
            <Image src={Logo} width={30} height={30} alt="Logo" />
          </Link>
        </div>
        <button
          className="burger-menu"
          onClick={toggleMenu}
          ref={burgerButtonRef}
        >
          <Image
            src={BurgerMenu}
            width={25}
            height={25}
            alt="Burger Menu Icon"
          />
        </button>

        <nav
          className={`mobile-nav left ${isMenuOpen ? "open" : "closed"}`}
          ref={mobileNavRef}
        >
          <button className="burger-close-menu" onClick={toggleMenu}>
            <Image
              src={BurgerClose}
              width={20}
              height={20}
              alt="Burger Close Menu Icon"
            />
          </button>
          <ul className="mobile-nav-links">
            <li className="nav-item">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {t.nav.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                {t.nav.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>
                {t.nav.portfolio}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                {t.nav.blog}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                {t.nav.contact}
              </Link>
            </li>
          </ul>
          <div className="header-languages">
          <button
            className="language-btn"
            onClick={() => toggleLanguage("ge")}
          >
            <Image src={geFlag} width={30} height={30} alt="Georgian flag" />
          </button>
          <button
            className="language-btn"
            onClick={() => toggleLanguage("en")}
          >
            <Image src={enFlag} width={30} height={30} alt="English flag" />
          </button>
        </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
