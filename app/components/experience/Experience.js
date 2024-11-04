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
        <div className="experience">
          <p className="container-description">May 2024 – Present</p>
          <h3 className="container-title">Frontend Developer</h3>
          <p className="container-description">
            Redesigned the entire website, including the main site and admin
            panel, making it fully responsive. Developed a design system to
            ensure consistency across fonts, colors, and spacing. Added new
            features to enhance the website, introduced ideas to improve user
            experience, and implemented these changes. Collaborated with the
            team to troubleshoot and resolve issues, continually improving the
            website for seamless operation.
          </p>
          <div className="technology">
            <div className="technology-item">Html</div>
            <div className="technology-item">Css</div>
            <div className="technology-item">JavaScript</div>
            <div className="technology-item">React.cs</div>
            <div className="technology-item">Next.js</div>
          </div>
        </div>
      </Link>

      <Link
        href="https://mim.farm"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        <div className="experience">
          <p className="container-description">Aug 2023 – May 2024</p>
          <h3 className="container-title">Junior Frontend Developer</h3>
          <p className="container-description">
            Updated and maintained the company&apos;s website and admin panel with a
            focus on functionality and UX improvements. Contributed design ideas
            and features, translating them into effective web designs. Actively
            participated in team meetings to brainstorm ideas, solve challenges,
            and meet project goals.
          </p>
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
        <div className="experience">
          <h3 className="container-title">gamoitsani.info</h3>
          <p className="container-description">
            Gamoitsani.info is the official site for the Gamoitsani iOS app,
            providing all the app&apos;s details and how to use it. I fully designed
            and built the site from scratch, with a clean color scheme for an
            easy and enjoyable browsing experience
          </p>
          <div className="technology">
            <div className="technology-item">Html</div>
            <div className="technology-item">Css</div>
            <div className="technology-item">JavaScript</div>
            <div className="technology-item">Git</div>
            <div className="technology-item">Figma</div>
          </div>
        </div>
      </Link>
      <Link
        href="https://plintus.ge/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="experience">
          <h3 className="container-title">plintus.ge</h3>
          <p className="container-description">
            Plintus.ge is an informative website about baseboards, designed and
            developed to meet the client&apos;s needs. I handled the entire design
            process, from choosing the color scheme to building the site,
            ensuring a cohesive and attractive look
          </p>
          <div className="technology">
            <div className="technology-item">Html</div>
            <div className="technology-item">Css</div>
            <div className="technology-item">JavaScript</div>
            <div className="technology-item">Git</div>
            <div className="technology-item">WordPress</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Container;
