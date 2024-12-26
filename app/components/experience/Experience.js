"use client";
import "./Experience.css";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

function Experience() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="experiences">
      <h2 className="experiences-header">{t.workExperience}</h2>
      <Link
        href="https://trips2share.com/en"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        <div className="experience border-animate border-1">
          <div className="experience-inner">
            <p className="container-description">May 2024 – {t.presentDate}</p>
            <h3 className="container-title">{t.frontendDev}</h3>
            <ul className="experience-list">
              <li>{t.exp1Point1}</li>
              <li>{t.exp1Point2}</li>
              <li>{t.exp1Point3}</li>
              <li>{t.exp1Point4}</li>
              <li>{t.exp1Point5}</li>
            </ul>
            <div className="technology">
              <div className="technology-item">Html</div>
              <div className="technology-item">Css</div>
              <div className="technology-item">JavaScript</div>
              <div className="technology-item">React.js</div>
              <div className="technology-item">Next.js</div>
            </div>
          </div>
        </div>
      </Link>

      <Link
        href="https://mim.farm"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        <div className="experience border-animate border-1">
          <div className="experience-inner">
            <p className="container-description">Aug 2023 – May 2024</p>
            <h3 className="container-title">{t.juniorFrontendDev}</h3>
            <ul className="experience-list">
              <li>{t.exp2Point1}</li>
              <li>{t.exp2Point2}</li>
              <li>{t.exp2Point3}</li>
              <li>{t.exp2Point4}</li>
            </ul>
            <div className="technology">
              <div className="technology-item">Html</div>
              <div className="technology-item">Css</div>
              <div className="technology-item">JavaScript</div>
              <div className="technology-item">Git</div>
              <div className="technology-item">Figma</div>
              <div className="technology-item">WordPress</div>
              <div className="technology-item">Shopify</div>
            </div>
          </div>
        </div>
      </Link>

      <h2 className="experiences-header" style={{ marginTop: "50px" }}>
        {t.projects}
      </h2>
      <Link
        href="https://gamoitsani.info/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="experience border-animate border-1">
          <div className="experience-inner">
            <h3 className="container-title">gamoitsani.info</h3>
            <ul className="experience-list">
              <li>{t.projectDesc1}</li>
              <li>{t.projectDesc2}</li>
              <li>{t.projectDesc3}</li>
            </ul>
            <div className="technology">
              <div className="technology-item">Html</div>
              <div className="technology-item">Css</div>
              <div className="technology-item">JavaScript</div>
              <div className="technology-item">Git</div>
              <div className="technology-item">Figma</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="https://plintus.ge/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="experience border-animate border-1">
          <div className="experience-inner">
            <h3 className="container-title">plintus.ge</h3>
            <ul className="experience-list">
              <li>{t.projectDesc4}</li>
              <li>{t.projectDesc5}</li>
              <li>{t.projectDesc6}</li>
            </ul>
            <div className="technology">
              <div className="technology-item">Html</div>
              <div className="technology-item">Css</div>
              <div className="technology-item">JavaScript</div>
              <div className="technology-item">Git</div>
              <div className="technology-item">WordPress</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Experience;