import hero_image from "../../assets/hero.png"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero_image", {
      x: -400,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero_image",
        start: "top center",
        end: "+=500",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section className="mt-[1em] min-h-[85vh] mx-4 relative">
      <h1 className="text-[clamp(2em,10vw,5em)] text-slate-50 text-start md:text-center font-bold">
        SOTWARE DEVELOPER
      </h1>
      <div>
        <h1 className="text-[clamp(2em,10vw,5em)] text-slate-50 font-bold py-2">
          PORTFOLIO
        </h1>
      </div>
      <img
        src={hero_image}
        alt="hero image"
        className="filter drop-shadow-2xl hover:drop-shadow-purple-700/20 ease-in-out duration-1000 absolute right-[1em] md:right-[22em] top-[10em] md:-top-[0.51em] max-w-[19em] md:max-w-[19em] z-10"
        data-aos="zoom-in"
      />
      <h1 className="absolute  right-1 -bottom-4 md:bottom-4 text-end font-bold text-slate-700 flex-2  ">
        I believe the best digital products emerge from a{" "}
        <br className="hidden md:block" /> deep understanding of both user needs{" "}
        <br className="hidden md:block" /> and technical possibilities.
      </h1>
    </section>
  );
};

export default Hero
