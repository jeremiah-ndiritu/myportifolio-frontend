const Process = () => {
  return (
    <section className="min-h-screen mx-8">
      <h1 className="text-center my-4 text-4xl font-bold text-slate-50">
        My Software Development Life Cycle (SDLC)
      </h1>
      <p className="text-slate-400 text-center max-w-3xl mx-auto mb-10">
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
          <div className="border-b border-slate-600 pb-6">
            <h2 className="text-2xl text-slate-100 mb-2">
              1. Planning & Requirement Analysis
            </h2>
            <p className="text-slate-400">
              This phase defines the project scope, feasibility, and objectives.
              Stakeholders, analysts, and developers collaborate to identify
              business goals and user needs. Deliverables include feasibility
              studies, risk assessments, and a Software Requirement
              Specification (SRS). Clear documentation here prevents scope creep
              and ensures alignment with organizational strategy.
            </p>
            {/* <img src={req_biz_plan} alt="Requirement Planning" /> */}
          </div>
        </div>

        {/* Design */}
        <div className=" gap-6 items-center my-16">
          <div className="border-b border-slate-600 pb-6">
            <h2 className="text-2xl text-slate-100 mb-2">2. Design</h2>
            <p className="text-slate-400">
              The design phase transforms requirements into a blueprint. System
              architecture, UI/UX mockups, database schemas, and integration
              points are defined. Deliverables include the Software Design
              Document (SDD), which acts as a roadmap for developers. Modern
              practices emphasize modular design, microservices, and security
              protocols embedded early in the architecture.
            </p>
          </div>
          
        </div>

        {/* Development */}
        <div className="border-b border-slate-600 pb-6 my-16">
          <h2 className="text-2xl text-slate-100 mb-2">
            3. Development (Coding)
          </h2>
          <p className="text-slate-400">
            Developers write code based on the design specifications, adhering
            to coding standards and version control practices. Peer reviews and
            continuous integration pipelines ensure quality and maintainability.
            Agile methodologies encourage iterative builds, while AI-assisted
            coding tools accelerate development without compromising
            reliability.
          </p>
        </div>

        {/* Testing */}
        <div className="border-b border-slate-600 pb-6 my-16">
          <h2 className="text-2xl text-slate-100 mb-2">4. Testing</h2>
          <p className="text-slate-400">
            Rigorous testing validates functionality, performance, and security.
            Techniques include unit testing, integration testing, system
            testing, and user acceptance testing. Automated test suites and
            CI/CD pipelines reduce errors and accelerate feedback loops. The
            goal is to ensure the software meets quality standards before
            deployment.
          </p>
        </div>

        {/* Deployment */}
        <div className="border-b border-slate-600 pb-6 my-16">
          <h2 className="text-2xl text-slate-100 mb-2">5. Deployment</h2>
          <p className="text-slate-400">
            Deployment releases the software into production environments.
            Common strategies include Blue-Green, Canary, and Rolling
            deployments to minimize risk. Documentation, training, and rollback
            plans are essential to ensure smooth adoption by end-users.
          </p>
        </div>

        {/* Maintenance */}
        <div className="border-b border-slate-600 pb-6 my-16">
          <h2 className="text-2xl text-slate-100 mb-2">6. Maintenance</h2>
          <p className="text-slate-400">
            Post-deployment, the software requires continuous support, updates,
            and bug fixes. Maintenance ensures longevity, adaptability to
            evolving user needs, and resilience against security threats.
            Practices like DevOps and DevSecOps embed monitoring, patching, and
            iterative improvements into daily workflows.
          </p>
        </div>

        {/* Models & Best Practices */}
        <div className="border-b border-slate-600 pb-6 my-16">
          <h2 className="text-2xl text-slate-100 mb-2">
            SDLC Models & Best Practices
          </h2>
          <p className="text-slate-400">
            Different models guide how phases are executed:
          </p>
          <ul className="text-slate-400 list-disc list-inside mt-4">
            <li>
              <strong>Waterfall:</strong> Sequential, ideal for well-defined
              projects.
            </li>
            <li>
              <strong>Agile:</strong> Iterative, flexible, user-feedback driven.
            </li>
            <li>
              <strong>Spiral:</strong> Risk-focused, iterative cycles.
            </li>
            <li>
              <strong>DevOps:</strong> Continuous integration and deployment
              with strong collaboration.
            </li>
          </ul>
          <p className="text-slate-400 mt-4">
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
