"use client";

import "./portfolio.css";
import Github from "@/public/assets/github.svg";
import Link from "@/public/assets/link.svg";
import Image from "next/image";

const projects = [
  {
    date: "11/12/2024",
    title: "UsersPanel",
    builtWith: ["Next.js", "TailwindCss"],
    githubUrl: "https://github.com/kuliashvili/UsersPanel",
  },
  {
    date: "08/25/2024",
    title: "Rwmena",
    builtWith: ["Next.js", "Design System"],
    githubUrl: "https://github.com/kuliashvili/rwmena",
  },
  {
    date: "08/05/2024",
    title: "Gamoitsani.info",
    builtWith: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/davita00101110dmg/gamoitsani-web",
    websiteUrl: "https://gamoitsani.info/",
  },
  {
    date: "06/15/2024",
    title: "Plintus.ge",
    builtWith: ["WordPress", "JavaScript"],
    websiteUrl: "https://plintus.ge/",
  },
  {
    date: "02/06/2024",
    title: "Budgetify",
    builtWith: ["React.js", "CSS", "MongoDB"],
    githubUrl:
      "https://github.com/kuliashvili/Budgetify/tree/feature/project-initialization",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Portfolio</h1>
      <div className="table-container">
        <table className="portfolio-table">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">TITLE</th>
              <th scope="col">BUILT WITH</th>
              <th scope="col">LINKS</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={`${project.title}-${index}`}>
                <td className="date-cell">{project.date}</td>
                <td className="title-cell">{project.title}</td>
                <td className="built-with-cell">
                  {project.builtWith.join(" · ")}
                </td>
                <td className="links-cell">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Image
                        src={Github}
                        width={20}
                        height={20}
                        alt="GitHub icon"
                      />
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                      aria-label={`Live website for ${project.title}`}
                    >
                      <Image
                        src={Link}
                        width={20}
                        height={20}
                        alt="Website link icon"
                      />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
