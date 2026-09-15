import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className="mx-4 my-[3em]">
      <h1 className="py-2 text-start text-[clamp(1em,10vw,4em)] font-bold text-muted md:text-end">
        FEATURED PROJECTS
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <article
            key={project.slug}
            className="min-h-[70vh] min-w-[20vw] rounded border border-border bg-surface-raised p-6 flex flex-col justify-between"
            data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
          >
            <div>
              <p className="text-sm text-primary">{project.status}</p>
              <h2 className="mt-3 text-2xl font-bold text-fg">
                {project.name}
              </h2>
              <p className="mt-4 text-muted">{project.description}</p>
            </div>
            <div>
              <p className="text-sm text-muted">{project.category}</p>
              <p className="mt-3 text-sm text-fg">{project.detail}</p>
              <p className="mt-5 text-xs text-muted">
                {project.technologies.join(" / ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
