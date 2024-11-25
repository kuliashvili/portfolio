import "./Experience.css";
import Link from "next/link";

function Container() {
  return (
    <div className="experiences">
      <h2 className="experiences-header">Work Experience</h2>
      <Link
        href="https://trips2share.com/en"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        <div className="experience border-animate border-1">
          <div className="experience-inner">
            <p className="container-description">May 2024 – Present</p>
            <h3 className="container-title">Frontend Developer</h3>
            <ul className="experience-list">
              <li>
                Led complete website redesign, including main site and admin
                panel, with full responsive implementation
              </li>
              <li>
                Developed and implemented a comprehensive design system for
                consistent fonts, colors, and spacing
              </li>
              <li>
                Introduced and implemented new features to enhance user
                experience
              </li>
              <li>
                Collaborated effectively with team members to identify and
                resolve technical issues
              </li>
              <li>
                Contributed to continuous website improvement through iterative
                development and optimization
              </li>
            </ul>
            <div className="technology">
              <div className="technology-item">Html</div>
              <div className="technology-item">Css</div>
              <div className="technology-item">JavaScript</div>
              <div className="technology-item">React.cs</div>
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
            <h3 className="container-title">Junior Frontend Developer</h3>
            <ul className="experience-list">
              <li>
                Maintained and enhanced company website and admin panel with
                focus on UX improvements
              </li>
              <li>
                Proposed and implemented new design features to enhance user
                experience
              </li>
              <li>
                Translated design concepts into functional web implementations
              </li>
              <li>
                Participated actively in team meetings for ideation and
                problem-solving sessions
              </li>
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
        Projects
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
              <li>
                Designed and developed the official website for Gamoitsani iOS
                app from scratch
              </li>
              <li>
                Implemented clean and intuitive user interface with carefully
                selected color scheme
              </li>
              <li>
                Created comprehensive app documentation and user guidance
                content
              </li>
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
              <li>
                Designed and developed a comprehensive baseboard information
                website
              </li>
              <li>
                Led complete design process from color scheme selection to site
                implementation
              </li>
              <li>
                Created custom WordPress theme to match client specifications
              </li>
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

export default Container;
