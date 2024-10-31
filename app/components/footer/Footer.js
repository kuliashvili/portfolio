import "./Footer.css";
import githubIcon from "/assets/github.svg";
import linkedinIcon from "/assets/linkedin.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            className="footer-socials-item"
            href="https://github.com/kuliashvili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={githubIcon}
              width={30}
              height={30}
              alt="Github Icon"
            ></Image>
          </a>
          <a
            className="footer-socials-item"
            href="https://www.linkedin.com/in/kuliashvili/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedinIcon}
              width={30}
              height={30}
              alt="Linkedin Icon"
            ></Image>
          </a>
        </div>

        <div className="footer-email">
          <p>
            <a href="mailto:giorgi.kuliashvili.1@btu.edu.ge">
              giorgi.kuliashvili.1@btu.edu.ge
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
