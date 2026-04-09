
const Projects = () => {
  return (
    <section className="mx-4 my-[3em] ">
      <h1 className="text-[clamp(1em,10vw,4em)] text-slate-700 font-bold py-2 text-start md:text-end">
        FEATURED PROJECTS
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div
          className="border border-slate-500 min-w-[20vw] min-h-[70vh] rounded"
          data-aos="zoom-in-right"></div>
        <div
          className="border border-slate-500 min-w-[20vw] min-h-[70vh] rounded"
          data-aos="zoom-in-left"></div>
        <div
          className="border border-slate-500 min-w-[20vw] min-h-[70vh] rounded"
          data-aos="zoom-in-right"></div>
        <div
          className="border border-slate-500 min-w-[20vw] min-h-[70vh] rounded"
          data-aos="zoom-in-left"></div>
      </div>
    </section>
  );
}

export default Projects
