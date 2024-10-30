import "./introsection.css";
import Image from "next/image";
import Profile from "../../assets/profile.webp";
function IntroSection() {
  return (
    <div className="introsection">
      <div className="section-left">
        <Image
          className="profile-picture"
          src={Profile}
          width={500}
          height={500}
          alt="Profile Picture"
        ></Image>
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
          <a
            href="mailto:giorgi.kuliashvili.1@btu.edu.ge"
            className="email-link"
          >
            giorgi.kuliashvili.1@btu.edu.ge
          </a>
        </p>
      </div>
    </div>
  );
}

export default IntroSection;
