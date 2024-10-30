"use client";
import { useEffect, useState } from "react";
import Button from "./components/button/Button";
import "./styles/globals.css";

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
      <h1>zd all</h1>
      <h2>zd all</h2>
      <h3>zd all</h3>
      <p>zd all</p>
      <Button>ragac</Button>
      <Button>submit</Button>
      <Button>submit your text please</Button>
      <div
        className="blur-effect"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
}
