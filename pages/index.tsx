import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MatrixBackground from "@/components/MatrixBackground";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <MatrixBackground /> */}
      <HeroSection />
      
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
