"use client";
import "./about.css";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function AboutPage() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="aboutpage">
      <About></About>
      <div className="aboutpage-text">
        <p className="about-text">
          {t.aboutFocus}
        </p>
        
        <p className="about-text">
          {t.aboutFuture}
        </p>
      </div>
      
      {/* <Skills></Skills> */}
    </div>
  );
}