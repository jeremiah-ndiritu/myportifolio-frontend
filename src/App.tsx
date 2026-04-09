import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import CaseStudy from "./pages/CaseStudy";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import About from "./pages/AboutPage";
import Particles from "./components/Particles";
import useAIChatDialogue from "./hooks/useAIChatDialogue";
import AiChat from "./components/partials/AiChat";
// import MobileNav from './components/partials/MobileNav';
const App = () => {
  const {isOpen} = useAIChatDialogue()
  useEffect(() => {
    AOS.init({
      duration: 900, // Optional: animation duration in milliseconds
      once: false, // Optional: whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "fixed" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        ></Particles>
      </div>
      {
        isOpen && <AiChat />
      }
      <Header />
      {/* <MobileNav/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
