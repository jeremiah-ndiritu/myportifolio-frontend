import jnpng from "@images/jeremiah-ai-pic-in-suit-passport.png";
import { Helmet } from "react-helmet-async";

export default function AboutPage(){
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>About Jeremiah Ndiritu | Developer</title>
      </Helmet>
      <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Title Section */}
        <div className="relative">
          <h1 className="absolute -top-10 left-0 select-none text-[clamp(2.5em,12vw,6em)] font-black tracking-tighter text-muted opacity-10">
            ABOUT ME
          </h1>
          <h1 className="relative z-10 text-[clamp(2em,8vw,4em)] font-bold text-fg">
            About Me
          </h1>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-primary"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface-raised">
                {/* Placeholder for your suit/passport image */}
                <img
                  src={jnpng}
                  alt="Jeremiah Ndiritu"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-fg">
                JEREMIAH NDIRITU
              </h2>
              <div className="space-y-0.5">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  BSc. Software Engineering
                </p>
                <p className="font-mono text-xs text-muted">
                  Kirinyaga University
                </p>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2">
            <p className="text-lg font-medium leading-relaxed text-muted md:text-xl">
              Dive into a world where{" "}
              <span className="text-fg">innovation meets creativity</span>. As a
              Fullstack Developer and Designer, I craft seamless digital
              experiences that captivate and inspire.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted">
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
                  className="rounded-full border border-border bg-surface-raised px-4 py-2 text-xs font-mono text-fg"
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