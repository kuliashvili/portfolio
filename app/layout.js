"use client";
import "./styles/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="Portfolio">
        <Header />
        {children}
        <Footer />
        <div
          className="blur-effect"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
      </body>
    </html>
  );
}
