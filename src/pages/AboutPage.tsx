import jnpng from "@images/jeremiah-ai-pic-in-suit-passport.png";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>About Jeremiah Ndiritu | Developer</title>
      </Helmet>
      <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Title Section */}
        <div className="relative">
          <h1 className="text-[clamp(2.5em,12vw,6em)] text-secondary font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-0 select-none">
            ABOUT ME
          </h1>
          <h1 className="text-[clamp(2em,8vw,4em)] text-secondary font-bold relative z-10">
            About Me
          </h1>
          <div className="h-1.5 w-20 bg-blue-500 rounded-full mt-2"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl bg-slate-800 overflow-hidden border border-white/10">
                {/* Placeholder for your suit/passport image */}
                <img
                  src={jnpng}
                  alt="Jeremiah Ndiritu"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold text-secondary tracking-tight">
                JEREMIAH NDIRITU
              </h2>
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-blue-400 uppercase tracking-widest">
                  BSc. Software Engineering
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Kirinyaga University
                </p>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl text-secondary/80 leading-relaxed font-medium">
              Dive into a world where{" "}
              <span className="text-white">innovation meets creativity</span>.
              As a Fullstack Developer and Designer, I craft seamless digital
              experiences that captivate and inspire.
            </p>

            <p className="mt-6 text-base text-secondary/70 leading-relaxed">
              Explore my portfolio to witness the fusion of cutting-edge
              technology and artistic vision, where every project tells a unique
              story of problem-solving and design excellence. Let's embark on a
              journey through my work and discover how I bring ideas to life in
              the digital realm.
            </p>

            {/* Quick Stats/Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Fullstack",
                "UI/UX Design",
                "React",
                "TypeScript",
                "MySQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
