import React from "react";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import Examples from "./components/Examples";
import CTA from "./components/CTA";
import content from "./data/content";
import { Helmet } from "react-helmet-async";

const FreemiahPage: React.FC = () => {
  return (
    <main className="bg-bg text-fg">
        <Helmet>
            <title>Freemiah | Automate your repetitive task</title>
        </Helmet>
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctas={content.hero.ctas}
      />
      <Problems items={content.problems} />
      <Solutions items={content.solutions} />
      <Process steps={content.processSteps} />
      <Examples items={content.examples} />
      <CTA />
    </main>
  );
};

export default FreemiahPage;
