
import Button from "./components/button/Button";
import "./styles/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/introsection/IntroSection";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Experience from "./components/experience/Experience"



export default function Home() {

  return (
    <div className="Portfolio">
      <IntroSection></IntroSection>
      {/* <Skills></Skills>  */}
      <About></About>
      <Experience></Experience>
    </div>
  );
}
