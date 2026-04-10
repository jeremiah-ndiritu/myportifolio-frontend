import ScrollVelocity from "../ScrollVelocity";
import aboutImg from "@images/jeremiah-ai-pic-in-suit.png";
const About = () => {
  const velocity = 20;
  return (
    <section
      id="about"
      className="min-h-[80vh] md:min-h-[110vh] mt-[5em] md:mt-[20em] mx-4"
    >
      <ScrollVelocity
        texts={["", " DEVELOPER - FULLSTACK - DEVELOPER - "]}
        velocity={velocity}
        className=" text-slate-500"
      />
      <div className="mt-10">
        <h1 className="text-[clamp(2em,10vw,4em)] text-secondary font-bold py-2 text-center">
          ABOUT ME
        </h1>
        <div className="flex flex-col md:flex-row items-end justify-between">
          <div className="text-start text-slate-300 flex-1">
            <img
              src={aboutImg}
              alt="About Image"
              className="min-h-30 min-w-30 rounded bg-slate-800"
            />
            <h1>JEREMIAH NDIRITU</h1>
            <p>BSC. SOFTWARE ENGINEERING</p>
            <p>KIRINYAGA UNIVERSITY</p>
          </div>
          <div className="flex-2">
            <p className="text-slate-600 text- mx-4 md:mx-20">
              Dive into a world where innovation meets creativity. As a
              Fullstack Developer and Designer, I craft seamless digital
              experiences that captivate and inspire. About my portfolio to
              witness the fusion of cutting-edge technology and artistic vision,
              where every project tells a unique story of problem-solving and
              design excellence. Let's embark on a journey through my work and
              discover how I bring ideas to life in the digital realm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
