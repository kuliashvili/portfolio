"use client";
import Image from "next/image";
import "./portfolio.css";
import Github from "@/public/assets/github.svg";
import Link from "@/public/assets/link.svg";
import portfolio1 from "@/public/assets/portfolio1.png";
import portfolio2 from "@/public/assets/portfolio2.png";
import portfolio3 from "@/public/assets/portfolio3.png";
import portfolio4 from "@/public/assets/portfolio4.png";
import portfolio5 from "@/public/assets/portfolio5.png";

const projects = [
  {
    date: "08/05/2024",
    title: "Gamoitsani.info",
    builtWith: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/davita00101110dmg/gamoitsani-web",
    websiteUrl: "https://gamoitsani.info/",
    coverImage: portfolio3,
  },
  {
    date: "06/15/2024",
    title: "Plintus.ge",
    builtWith: ["WordPress", "JavaScript"],
    websiteUrl: "https://plintus.ge/",
    coverImage: portfolio4,
  },
  {
    date: "11/12/2024",
    title: "UsersPanel",
    builtWith: ["Next.js", "TailwindCss"],
    githubUrl: "https://github.com/kuliashvili/UsersPanel",
    coverImage: portfolio1,
  },
  {
    date: "08/25/2024",
    title: "Rwmena",
    builtWith: ["Next.js", "Design System"],
    githubUrl: "https://github.com/kuliashvili/rwmena",
    coverImage: portfolio2,
  },
  {
    date: "02/06/2024",
    title: "Budgetify",
    builtWith: ["React.js", "CSS", "MongoDB"],
    githubUrl:
      "https://github.com/kuliashvili/Budgetify/tree/feature/project-initialization",
    coverImage: portfolio5,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <Image
          src={project.coverImage}
          alt={project.title}
          className="project-image"
          fill
        />
        <div className="overlay" />

        <div className="links-container">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              aria-label="View GitHub repository"
            >
              <Image
                src={Github}
                width={20}
                height={20}
                alt="github icon"
              ></Image>
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              aria-label="Visit live website"
            >
              <Image src={Link} width={20} height={20} alt="link icon"></Image>
            </a>
          )}
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-date">{project.date}</p>
        <div className="built-with">
          {project.builtWith.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
}
