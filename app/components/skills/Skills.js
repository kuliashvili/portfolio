import "./Skills.css";
import Image from "next/image";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import JavaScript from "../../assets/js.svg";
import React from "../../assets/react.svg";
import NextJs from "../../assets/next.svg";
import css from "styled-jsx/css";

function Skills() {
  return (
    <div className="skills">
      <Image
        className="skills-image"
        src={Html}
        width={35}
        height={86}
        alt="Html Icon"
      ></Image>
      <Image
        className="skills-image"
        src={Css}
        width={35}
        height={86}
        alt="Css Icon"
      ></Image>
      <Image
        className="skills-image"
        src={JavaScript}
        width={35}
        height={86}
        alt="JavaScript Icon"
      ></Image>
      <Image
        className="skills-image"
        src={React}
        width={35}
        height={86}
        alt="React Icon"
      ></Image>
      <Image
        className="skills-image"
        src={NextJs}
        width={35}
        height={86}
        alt="NextJs Icon"
      ></Image>
    </div>
  );
}

export default Skills;
