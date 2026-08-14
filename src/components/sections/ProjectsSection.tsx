const Projects = () => {
  return (
    <section className="mx-4 my-[3em]">
      <h1 className="py-2 text-start text-[clamp(1em,10vw,4em)] font-bold text-muted md:text-end">
        FEATURED PROJECTS
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div
          className="min-h-[70vh] min-w-[20vw] rounded border border-border bg-surface-raised"
          data-aos="zoom-in-right"
        ></div>
        <div
          className="min-h-[70vh] min-w-[20vw] rounded border border-border bg-surface-raised"
          data-aos="zoom-in-left"
        ></div>
        <div
          className="min-h-[70vh] min-w-[20vw] rounded border border-border bg-surface-raised"
          data-aos="zoom-in-right"
        ></div>
        <div
          className="min-h-[70vh] min-w-[20vw] rounded border border-border bg-surface-raised"
          data-aos="zoom-in-left"
        ></div>
      </div>
    </section>
  );
};

export default Projects;
