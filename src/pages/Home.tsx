import Hero from "../components/sections/Hero";
import About from "../components/sections/AboutSection";
import Tech from "../components/tech/Tech";
import Projects from "../components/sections/ProjectsSection";
import Services from "../components/services/Service";
import LatestBlogs from "../components/blog/LatestBlogs";
import Talks_session from "../components/Talks&Speaking/Talks_session";
import Learning_Certs from "../components/learning/Learning_Certs";
// import Testimonials from "../components/testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Hero />
      <Tech />
      <Services />
      <About />
      <Projects />
      <LatestBlogs />
      <Talks_session />
      <Learning_Certs />
      {/* <Testimonials/> */}
    </div>
  );
};

export default Home;
