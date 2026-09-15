import { caseStudies } from "@/data/projects";

const CaseStudy = () => {
  return (
    <section className="min-h-screen bg-bg">
      <h1 className="my-4 text-center text-3xl text-fg">Cases</h1>
      <div className="mx-4 space-y-4 pb-12">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="rounded border border-border bg-surface-raised p-6 text-fg"
          >
            <p className="text-sm text-primary">{study.status}</p>
            <h2 className="mt-2 text-2xl font-semibold">{study.name}</h2>
            <p className="mt-3 text-muted">{study.description}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">The problem</h3>
                <p className="mt-2 text-sm text-muted">{study.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold">The approach</h3>
                <p className="mt-2 text-sm text-muted">{study.approach}</p>
              </div>
              <div>
                <h3 className="font-semibold">Engineering</h3>
                <p className="mt-2 text-sm text-muted">{study.engineering}</p>
              </div>
              <div>
                <h3 className="font-semibold">What I learned</h3>
                <p className="mt-2 text-sm text-muted">{study.learned}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
