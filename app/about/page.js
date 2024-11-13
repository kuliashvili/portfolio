import "./about.css";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";

function AboutPage() {
  return (
    <div className="aboutpage">
      <About></About>
      <div className="aboutpage-text">
        <p className="about-text">
          I’m focused on becoming a solid frontend developer with a good
          understanding of rendering, website performance, file optimization,
          smart Git practices... Right now, my goal is to get really skilled in
          frontend, building sites that are fast and efficient.
        </p>

        <p className="about-text">
          Down the line, I’d like to become a T-shaped developer — an expert in
          frontend but with knowledge across other areas too. I’m looking
          forward to learning more with every project and seeing where this
          journey takes me.
        </p>
      </div>

      <Skills></Skills>
    </div>
  );
}
{
}

export default AboutPage;
