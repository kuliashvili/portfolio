"use client";
import "./introsection.css";
import Image from "next/image";
import Profile from "../../../public/assets/profile.webp";
import Button from "../button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

function IntroSection() {
  const { currentLanguage } = useLanguage();
  
  return (
    <div className="introsection">
      <div className="section-left">
        <div className="border-animate circle border-2 image-wrapper">
          <Image
            className="profile-picture"
            src={Profile}
            width={500}
            height={500}
            alt="Profile Picture"
            priority={true}
          />
        </div>
      </div>
      <div className="section-right">
        <p className="profile-description">
          {translations[currentLanguage].greeting}
        </p>
        <h1 className="profile-header">
          {translations[currentLanguage].role}
        </h1>
        <p className="profile-subheader">
          {translations[currentLanguage].description}
          <br />
          <a 
            className="homebutton-container" 
            target="_blank" 
            href="/giorgi_kuliashvili_resume.pdf"
          >
            <Button className="button">
              {translations[currentLanguage].resumeButton}
            </Button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default IntroSection;