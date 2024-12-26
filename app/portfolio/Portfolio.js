// app/portfolio/page.js
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
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";
import { projects } from "@/app/data/projects";

const projectImages = {
  "UsersPanel": portfolio1,
  "Rwmena": portfolio2,
  "Gamoitsani.info": portfolio3,
  "Plintus.ge": portfolio4,
  "Budgetify": portfolio5,
};

const ProjectCard = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  return (
    <div className="project-card border-animate border-2">
      <div className="image-container">
        <Image
          src={projectImages[project.title]}
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
              aria-label={t.viewGithub}
            >
              <Image src={Github} width={20} height={20} alt="github icon" />
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              aria-label={t.visitWebsite}
            >
              <Image src={Link} width={20} height={20} alt="link icon" />
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
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">{t.portfolioTitle}</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`${project.title}-${index}`} 
            project={project}
          />
        ))}
      </div>
    </div>
  );
}