"use client";
import "./blog.css";
import Coding from "@/public/assets/coding.svg";
import Image from "next/image";
import { useState } from "react";

export default function Blog() {
  return (
    <div className="blogs">
      <h1 className="blog-header">Coming Soon!</h1>
      <p>
        Thanks for visiting!
        <br /> I'm currently working on some exciting blog posts<br />
        about design, web development, and creativity. Check back soon for
        <br /> fresh content!
      </p>
      <div className="image-container">
        <Image
          className="coding-image"
          src={Coding}
          width={250}
          height={250}
          alt="Coding Image"
        />
      </div>
    </div>
  );
}