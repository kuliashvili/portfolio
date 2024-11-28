import Button from "./components/button/Button";
import "./styles/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/introsection/IntroSection";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./contact/Contact";

export const metadata = {
  title: "Giorgi Kuliashvili | Frontend Developer",
  description:
    "Explore my journey as a Frontend Developer and see how I build fast, visually appealing websites",
};

export default function Home() {
  return (
    <div className="Homepage">
      <IntroSection></IntroSection>
      {/* <Skills></Skills>  */}
      <About headingLevel="h2"></About>
      <Experience></Experience>
      <Contact headingLevel="h2" ></Contact>
    </div>
  );
}
