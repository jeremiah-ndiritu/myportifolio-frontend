const Process = () => {
  return (
    <section className="mx-8 min-h-screen">
      <h1 className="my-4 text-center text-4xl font-bold text-fg">
        My Software Development Life Cycle (SDLC)
      </h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-muted">
        The Software Development Life Cycle (SDLC) is a structured methodology
        that guides the creation of high-quality, reliable, and secure software.
        It ensures that every stage—from planning to maintenance—is executed
        with precision, aligning technical solutions with business goals and
        user needs. Below, I outline the seven key phases of the SDLC, enriched
        with industry best practices and modern approaches such as Agile,
        DevOps, and AI-enhanced workflows.
      </p>
      <div className="flex justify-center">
        <div>
          {/* Planning & Requirement Analysis */}
          <div className="grid grid-cols-2 gap-6 items-center my-16">
            <div className="border-b border-border pb-6">
              <h2 className="mb-2 text-2xl text-fg">
                1. Planning & Requirement Analysis
              </h2>
              <p className="text-slate-400">
                This phase defines the project scope, feasibility, and
                objectives. Stakeholders, analysts, and developers collaborate
                to identify business goals and user needs. Deliverables include
                feasibility studies, risk assessments, and a Software
                Requirement Specification (SRS). Clear documentation here
                prevents scope creep and ensures alignment with organizational
                strategy.
              </p>
              {/* <img src={req_biz_plan} alt="Requirement Planning" /> */}
            </div>
          </div>

          {/* Design */}
          <div className=" gap-6 items-center my-16">
            <div className="border-b border-border pb-6">
              <h2 className="mb-2 text-2xl text-fg">2. Design</h2>
              <p className="text-muted">
                The design phase transforms requirements into a blueprint.
                System architecture, UI/UX mockups, database schemas, and
                integration points are defined. Deliverables include the
                Software Design Document (SDD), which acts as a roadmap for
                developers. Modern practices emphasize modular design,
                microservices, and security protocols embedded early in the
                architecture.
              </p>
            </div>
          </div>

          {/* Development */}
          <div className="my-16 border-b border-border pb-6">
            <h2 className="mb-2 text-2xl text-fg">3. Development (Coding)</h2>
            <p className="text-muted">
              Developers write code based on the design specifications, adhering
              to coding standards and version control practices. Peer reviews
              and continuous integration pipelines ensure quality and
              maintainability. Agile methodologies encourage iterative builds,
              while AI-assisted coding tools accelerate development without
              compromising reliability.
            </p>
          </div>

          {/* Testing */}
          <div className="my-16 border-b border-border pb-6">
            <h2 className="mb-2 text-2xl text-fg">4. Testing</h2>
            <p className="text-muted">
              Rigorous testing validates functionality, performance, and
              security. Techniques include unit testing, integration testing,
              system testing, and user acceptance testing. Automated test suites
              and CI/CD pipelines reduce errors and accelerate feedback loops.
              The goal is to ensure the software meets quality standards before
              deployment.
            </p>
          </div>

          {/* Deployment */}
          <div className="my-16 border-b border-border pb-6">
            <h2 className="mb-2 text-2xl text-fg">5. Deployment</h2>
            <p className="text-muted">
              Deployment releases the software into production environments.
              Common strategies include Blue-Green, Canary, and Rolling
              deployments to minimize risk. Documentation, training, and
              rollback plans are essential to ensure smooth adoption by
              end-users.
            </p>
          </div>

          {/* Maintenance */}
          <div className="my-16 border-b border-border pb-6">
            <h2 className="mb-2 text-2xl text-fg">6. Maintenance</h2>
            <p className="text-muted">
              Post-deployment, the software requires continuous support,
              updates, and bug fixes. Maintenance ensures longevity,
              adaptability to evolving user needs, and resilience against
              security threats. Practices like DevOps and DevSecOps embed
              monitoring, patching, and iterative improvements into daily
              workflows.
            </p>
          </div>

          {/* Models & Best Practices */}
          <div className="my-16 border-b border-border pb-6">
            <h2 className="mb-2 text-2xl text-fg">
              SDLC Models & Best Practices
            </h2>
            <p className="text-muted">
              Different models guide how phases are executed:
            </p>
            <ul className="mt-4 list-disc list-inside text-muted">
              <li>
                <strong>Waterfall:</strong> Sequential, ideal for well-defined
                projects.
              </li>
              <li>
                <strong>Agile:</strong> Iterative, flexible, user-feedback
                driven.
              </li>
              <li>
                <strong>Spiral:</strong> Risk-focused, iterative cycles.
              </li>
              <li>
                <strong>DevOps:</strong> Continuous integration and deployment
                with strong collaboration.
              </li>
            </ul>
            <p className="mt-4 text-muted">
              Best practices include clear documentation, stakeholder
              communication, modular design, coding standards, and automation
              across testing and deployment. AI and low-code platforms further
              enhance efficiency and adaptability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
