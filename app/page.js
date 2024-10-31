"use client";
import { useEffect, useState } from "react";
import Button from "./components/button/Button";
import "./styles/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/introsection/IntroSection";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="Portfolio">
      <Header></Header>
      <IntroSection></IntroSection>
      {/* <Skills></Skills>  */}
      <About></About>
      <Footer></Footer>
      <div
        className="blur-effect"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
}
