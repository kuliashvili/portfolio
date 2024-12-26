"use client";
import "./About.css"; 
import Button from "../button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

function About({ headingLevel = "h1" }) {
  const Heading = headingLevel;
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="about">
      <Heading className="about-header">{t.aboutMe}</Heading>
      <p className="about-text">
        {t.aboutText1}{" "}
        <a
          className="link"
          href="https://gamoitsani.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gamoitsani.info
        </a>{" "}
        and{" "}
        <a
          className="link"
          href="https://plintus.ge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plintus.ge
        </a>
      </p>
      <p className="about-text">
        {t.aboutText2}{" "}
        <a
          className="link"
          href="https://mim.farm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mim Farm
        </a>{" "}
        {t.aboutText3}{" "}
        <a
          className="link"
          href="https://trips2share.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trips2Share
        </a>
        {t.aboutText4}
      </p>
      <p className="about-text">{t.aboutText5}</p>
      <p className="about-text">
        {t.aboutText6}{" "}
        <a href="mailto:giorgi.kuliashvili.1@btu.edu.ge" className="link">
          {t.reachOut}
        </a>{" "}
        {t.orDownload}
      </p>
    </div>
  );
}

export default About;