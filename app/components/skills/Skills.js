import "./Skills.css";
import Image from "next/image";
import Html2 from "../../../public/assets/html2.svg";
import Css2 from "../../../public/assets/css2.svg";
import JavaScript2 from "../../../public/assets/js2.svg";
import React2 from "../../../public/assets/react2.svg";
import NextJs2 from "../../../public/assets/next2.svg";

function Skills() {
  const skillImages = [
    { src: Html2, alt: "Html Icon" },
    { src: Css2, alt: "Css Icon" },
    { src: JavaScript2, alt: "JavaScript Icon" },
    { src: React2, alt: "React Icon" },
    { src: NextJs2, alt: "NextJs Icon" },
    { src: Html2, alt: "Html Icon" },
    { src: Css2, alt: "Css Icon" },
    { src: JavaScript2, alt: "JavaScript Icon" },
    { src: React2, alt: "React Icon" },
    { src: NextJs2, alt: "NextJs Icon" },
    { src: Html2, alt: "Html Icon" },
    { src: Css2, alt: "Css Icon" },
    { src: JavaScript2, alt: "JavaScript Icon" },
    { src: React2, alt: "React Icon" },
    { src: NextJs2, alt: "NextJs Icon" },
    { src: Html2, alt: "Html Icon" },
    { src: Css2, alt: "Css Icon" },
    { src: JavaScript2, alt: "JavaScript Icon" },
    { src: React2, alt: "React Icon" },
    { src: NextJs2, alt: "NextJs Icon" },
    { src: Html2, alt: "Html Icon" },
    { src: Css2, alt: "Css Icon" },
    { src: JavaScript2, alt: "JavaScript Icon" },
    { src: React2, alt: "React Icon" },
    { src: NextJs2, alt: "NextJs Icon" },
  ];

  const SkillSet = ({ className }) => (
    <div className={className}>
      {skillImages.map((img, index) => (
        <Image
          key={index}
          className="skills-image"
          src={img.src}
          width={35}
          height={86}
          alt={img.alt}
        />
      ))}
    </div>
  );

  return (
    <div className="skills-container">
      <SkillSet className="skills" />
    </div>
  );
}

export default Skills;
