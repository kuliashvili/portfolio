"use client";
import "./blog.css";
import Coding from "@/public/assets/coding.svg";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function Blog() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="blogs">
      <h1 className="blog-header">{t.comingSoon}</h1>
      <p className="blog-intro">
        <br />
        {t.blogIntro1}
        <br />
        <br />
        {t.blogIntro2}
        <br />
        <br />
        {t.blogIntro3}
      </p>
      {/* <div className="image-container">
        <Image
          className="coding-image"
          src={Coding}
          width={250}
          height={250}
          alt="Coding Image"
        />
      </div> */}
    </div>
  );
}