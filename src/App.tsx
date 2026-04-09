import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/partials/header/Header";
import Footer from "./components/partials/Footer";
import CaseStudy from "./pages/CaseStudy";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import About from "./pages/About";
// import MobileNav from './components/partials/MobileNav';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Optional: animation duration in milliseconds
      once: false, // Optional: whether animation should happen only once
    });
  }, []);
  return (
    <>
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
