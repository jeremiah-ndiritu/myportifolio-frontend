import FreemiahPage from "@/freemiah/FreemiahPage";
import AboutPage from "@/pages/AboutPage";
import CaseStudy from "@/pages/CaseStudy";
import HomePage from "@/pages/Home";
import Process from "@/pages/Process";
import Projects from "@/pages/Projects";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-studies" element={<CaseStudy />} />
      <Route path="/process" element={<Process />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/freemiah/*" element={<FreemiahPage />} />
    </Routes>
  );
}
