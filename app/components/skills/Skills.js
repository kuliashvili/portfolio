import "./Skills.css";
import Image from "next/image";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import JavaScript from "../../assets/js.svg";
import React from "../../assets/react.svg";
import NextJs from "../../assets/next.svg";
import Html2 from "../../assets/html2.svg";
import Css2 from "../../assets/css2.svg";
import JavaScript2 from "../../assets/js2.svg";
import React2 from "../../assets/react2.svg";
import NextJs2 from "../../assets/next2.svg";

function Skills() {
  return (
    <div className="skills">
      <Image
        className="skills-image"
        src={Html2}
        width={35}
        height={86}
        alt="Html Icon"
      ></Image>
      <Image
        className="skills-image"
        src={Css2}
        width={35}
        height={86}
        alt="Css Icon"
      ></Image>
      <Image
        className="skills-image"
        src={JavaScript2}
        width={35}
        height={86}
        alt="JavaScript Icon"
      ></Image>
      <Image
        className="skills-image"
        src={React2}
        width={35}
        height={86}
        alt="React Icon"
      ></Image>
      <Image
        className="skills-image"
        src={NextJs2}
        width={35}
        height={86}
        alt="NextJs Icon"
      ></Image>
    </div>
  );
}

export default Skills;
