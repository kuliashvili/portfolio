import "./About.css";
import Button from "../button/Button";

function About() {
  return (
    <div className="about">
      <h2 className="about-header">About Me</h2>
      <p className="about-text">
        In 2023, I began my journey in web development, starting with HTML, CSS,
        and JavaScript. Then I moved on to React and Next.js, at the same time
        working on independent projects like{" "}
        <a
          className="link"
          href="https://gamoitsani.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gamoitsani.info
        </a>{" "}
        and{" "}
        <a
          className="link"
          href="https://plintus.ge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plintus.ge
        </a>
      </p>
      <p className="about-text">
        I gained hands-on experience as a Frontend Developer at{" "}
        <a
          className="link"
          href="https://mim.farm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mim Farm
        </a>{" "}
        and currently work with{" "}
        <a
          className="link"
          href="https://trips2share.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trips2Share
        </a>
        . Along the way, I completed a frontend mentorship at Exadel, earned a
        Google UX certificate from Coursera, and am now in my final year at BTU,
        Business and Technology University.
      </p>
      <p className="about-text">
        I enjoy building web products that are fast, visually appealing, and
        user-friendly. Outside of coding, I love training in MMA and jiu-jitsu
        or spending time with friends.
      </p>
      <p className="about-text">
        Feel free to{" "}
        <a href="mailto:giorgi.kuliashvili.1@btu.edu.ge" className="link">
          reach out
        </a>{" "}
        or download my resume below.
      </p>
      <a href="/giorgi_kuliashvili_resume.pdf" download>
        <Button className="button">Download Resume</Button>
      </a>
    </div>
  );
}

export default About;
