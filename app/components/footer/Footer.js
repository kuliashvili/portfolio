
// app/components/footer/Footer.jsx
"use client";
import "./Footer.css";
import githubIcon from "../../../public/assets/github.svg";
import linkedinIcon from "../../../public/assets/linkedin.svg";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

function Footer() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            className="footer-socials-item"
            href="https://github.com/kuliashvili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={githubIcon}
              width={30}
              height={30}
              alt="Github Icon"
            />
          </a>
          <a
            className="footer-socials-item"
            href="https://www.linkedin.com/in/kuliashvili/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedinIcon}
              width={30}
              height={30}
              alt="Linkedin Icon"
            />
          </a>
        </div>
        
        <div className="footer-email">
          <p>
            <a href="mailto:giorgi.kuliashvili.1@btu.edu.ge">
              giorgi.kuliashvili.1@btu.edu.ge
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;