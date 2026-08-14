import React from "react";
import Button from "@/components/ui/Button";

type Props = {
  title: string;
  subtitle: string;
  ctas: { label: string; href: string }[];
};

const Hero: React.FC<Props> = ({ title, subtitle, ctas }) => {
  return (
    <section className="bg-bg text-fg py-20" aria-label="Freemiah hero">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-surface-raised border border-border rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-muted max-w-3xl mb-6">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a href={ctas[0]?.href || "#contact"}>
              <Button className="bg-primary text-white px-5 py-3 rounded-md">
                {ctas[0]?.label}
              </Button>
            </a>
            <a href={ctas[1]?.href || "#problems"}>
              <Button className="bg-surface border border-border text-fg px-5 py-3 rounded-md">
                {ctas[1]?.label}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
