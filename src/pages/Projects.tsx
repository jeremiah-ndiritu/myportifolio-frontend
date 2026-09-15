import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className="min-h-screen bg-bg">
      <h1 className="my-4 text-center text-3xl text-fg">Projects</h1>
      <div className="mx-4 grid gap-4 pb-12 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded border border-border bg-surface-raised p-6 text-fg"
          >
            <p className="text-sm text-primary">{project.status}</p>
            <h2 className="mt-2 text-2xl font-semibold">{project.name}</h2>
            <p className="mt-3 text-muted">{project.description}</p>
            <p className="mt-4 text-sm">{project.detail}</p>
            <p className="mt-5 text-xs text-muted">
              {project.category} / {project.technologies.join(" / ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
