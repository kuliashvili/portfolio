"use client";
import "./blog.css";
import Coding from "@/public/assets/coding.svg";
import Image from "next/image";
import { useState } from "react";

export default function Blog() {
  return (
    <div className="blogs">
      <h1 className="blog-header">Coming Soon!</h1>
      <p className="blog-intro">
        <br />
        As a frontend developer passionate about creating web experiences, I'm
        excited to share my journey, insights, and discoveries with you. Here,
        you'll find a growing collection of articles covering everything from
        practical coding solutions to design principles that make websites both
        beautiful and functional.
        <br />
        <br />
        I'm currently crafting detailed posts about Modern web development
        practices and tools I've discovered along my journey,UI/UX design
        principles I've learned from real-world projects, Deep dives into React
        and Next.js features that have transformed my development process,
        Personal experiences and lessons from working on web projects
        <br />
        <br />
        Having worked on projects from scratch and collaborating with teams at
        Trips2Share and Mim Farm, I'm eager to share both technical insights and
        practical experiences that could help others in their web development
        journey. Check back soon for content! I'm working on making this space
        not just a blog, but a resource for fellow developers, designers, and
        anyone interested in web technologies.
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
