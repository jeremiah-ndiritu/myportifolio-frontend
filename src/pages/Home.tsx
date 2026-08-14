import Hero from "../components/sections/Hero";
import Tech from "../components/tech/Tech";
import Projects from "../components/sections/ProjectsSection";
import Services from "../components/services/Service";
// import Learning_Certs from "../components/learning/Learning_Certs";
// import Testimonials from "../components/testimonials/Testimonials";
export default function HomePage () {
  return (
    <div>
      <Hero />
      <Tech />
      <Services />
    
      <Projects />
      {/* <Learning_Certs /> */}
      {/* <Testimonials/> */}
    </div>
  );
};

