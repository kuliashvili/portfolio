import "./introsection.css";
import Image from "next/image";
import Profile from "../../../public/assets/profile.webp";
import Button from "../button/Button";

function IntroSection() {
  return (
    <div className="introsection">
      <div className="section-left">
        <div className="border-animate circle border-2 image-wrapper">
          <Image
            className="profile-picture"
            src={Profile}
            width={500}
            height={500}
            alt="Profile Picture"
            priority={true}
          ></Image>
        </div>
      </div>
      <div className="section-right">
        <p className="profile-description">Hi, I am Giorgi</p>
        <h1 className="profile-header">
          Front-end Developer from Tbilisi, Georgia
        </h1>
        <p className="profile-subheader">
          I enjoy building web products that perform well, look great, and
          provide a good user experience. Feel free to reach out to me at
          <br></br>
          <a className="homebutton-container"  target="_blank" href="/giorgi_kuliashvili_resume.pdf">
        <Button className="button">Open Resume</Button>
      </a>
        </p>
      </div>
    </div>
  );
}

export default IntroSection;
