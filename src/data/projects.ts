export type Project = {
  name: string;
  slug: string;
  description: string;
  status: string;
  category: string;
  technologies: string[];
  detail: string;
};

export type CaseStudy = Project & {
  problem: string;
  approach: string;
  engineering: string;
  learned: string;
};

export const projects: Project[] = [
  {
    name: "Muciifi",
    slug: "muciifi",
    description:
      "A Kenya-first property listing and landlord workspace built around how property businesses actually organize themselves.",
    status: "Building",
    category: "Product platform",
    technologies: ["TypeScript", "Express 5", "Drizzle", "MySQL", "Zod"],
    detail:
      "The model follows Brand -> Property -> Accommodation -> Unit, with a branded public presence and practical phone, WhatsApp, and email contact flows instead of forcing every property into a booking marketplace.",
  },
  {
    name: "isThereDigital",
    slug: "istheredigital",
    description:
      "A discovery experiment for finding existing digital products, open-source tools, local solutions, and alternatives before building another version.",
    status: "Exploring",
    category: "Open-source discovery",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "pnpm"],
    detail:
      "The question behind it is simple: before building another thing, does the thing already exist? Builder submissions and ownership verification are meant to improve trust without turning verification into a ranking system.",
  },
  {
    name: "BokaLink",
    slug: "bokalink",
    description:
      "A platform connecting talent and capital, built around role-based professional identities rather than a conventional job board.",
    status: "Prototype",
    category: "Product experiment",
    technologies: ["Web development", "Product design"],
    detail:
      "It is included as an honest snapshot of an idea in progress: the interesting part is working through the flow and its assumptions, not pretending the prototype is a finished platform.",
  },
  {
    name: "Arribion Technologies",
    slug: "arribion-technologies",
    description:
      "A software and product engineering project with the internal tools and public-facing pieces needed to run a small technology company.",
    status: "Building",
    category: "Software engineering",
    technologies: ["TypeScript", "PostgreSQL", "Drizzle", "API architecture"],
    detail:
      "The work spans authentication, a CMS, contact and newsletter flows, team and project content, blog content, and scheduling or call-session concepts.",
  },
  {
    name: "Freemiah",
    slug: "freemiah",
    description:
      "A practical Kenyan shop stock-recording concept for tracking batches, buying price, units remaining, and selling price.",
    status: "Exploring",
    category: "Practical tool",
    technologies: ["React", "TypeScript"],
    detail:
      "Freemiah stays deliberately small: useful stock records for a real shop, without turning a straightforward need into a complicated inventory ERP.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    ...projects[0],
    problem:
      "Property businesses need a clear digital presence, but a simple listing does not automatically need to become a full booking marketplace.",
    approach:
      "Muciifi models the real structure of the business: a Brand contains Properties, Properties contain Accommodations, and Accommodations contain Units. That hierarchy gives each landlord or property business a workspace and a branded public page.",
    engineering:
      "The current direction uses a typed REST API with an Express 5, repository, service, and controller structure. Drizzle, MySQL, Zod validation, Pino logging, workspace roles, public slugs or subdomains, and M-Pesa-oriented billing and analytics foundations all support the product model.",
    learned:
      "Good domain modeling matters before adding features. Property software gets confusing quickly when every real-world entity is flattened into a generic listing.",
  },
  {
    ...projects[1],
    problem:
      "People and organizations keep rebuilding software partly because existing solutions are difficult to discover. Open-source projects, local tools, and cheaper alternatives can remain invisible even when they solve the problem well.",
    approach:
      "isThereDigital starts with a different question: does the thing already exist? The discovery experience is intended to feel closer to searching and exploring a map of solutions than browsing a large grid of startup cards.",
    engineering:
      "The experiment separates ordinary discovery from builder and business workflows. Builders can submit projects, verify ownership through a domain DNS TXT record, and receive an authenticity signal. Verification is for identity and trust, not a shortcut for ranking.",
    learned:
      "Discoverability is a product problem of its own. A useful registry needs to make existing software easier to find without pretending that one ranking can decide what is best for everyone.",
  },
  {
    ...projects[2],
    problem:
      "BokaLink was an attempt to make a booking or request experience easier to follow without hiding the important decisions behind a complicated interface.",
    approach:
      "I treated it as a prototype and used the work to test the shape of the flow, its information requirements, and where a user might hesitate.",
    engineering:
      "The valuable part of the implementation is the product thinking around a focused flow: deciding what the user needs at each step and keeping the prototype honest about what it does not yet solve.",
    learned:
      "A prototype is useful when it makes an assumption visible. It does not need a larger story attached to it to be worth keeping and learning from.",
  },
  {
    ...projects[3],
    problem:
      "A small technology company needs more than a landing page: it needs a place for its people, work, content, contacts, and recurring internal processes to meet.",
    approach:
      "Arribion brings those public and internal concerns into one software project, with content and operational concepts treated as part of the product rather than afterthoughts.",
    engineering:
      "The project works with TypeScript, PostgreSQL, Drizzle, an API architecture, authentication, CMS content, contact and newsletter functionality, team and project pages, blogs, and call-session scheduling concepts.",
    learned:
      "Internal tooling and public product work are connected. The same attention to data boundaries and clear flows matters in both places.",
  },
  {
    ...projects[4],
    problem:
      "Small shops often need a reliable record of stock batches and prices, not a full inventory system with more ceremony than the work requires.",
    approach:
      "Freemiah keeps the model close to the daily reality: buying price, units remaining, and selling price are the useful facts to capture first.",
    engineering:
      "The project explores how a small, focused interface can make repetitive stock recording clearer without adding unnecessary ERP-style complexity.",
    learned:
      "Practical software does not have to be large. A narrow tool can be the better product when it respects the scale of the problem.",
  },
];
