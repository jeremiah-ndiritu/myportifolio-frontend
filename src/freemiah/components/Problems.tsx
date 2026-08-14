import React from "react";
import Card from "@/components/ui/Card";

type Props = { items: string[] };

const Problems: React.FC<Props> = ({ items }) => {
  return (
    <section id="problems" className="py-16 bg-bg text-fg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-4">Problems we solve</h2>
        <p className="text-muted mb-6 max-w-3xl">
          Concrete, repeatable issues Freemiah helps remove so your team focuses
          on work that matters.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((p) => (
            <Card key={p} className="p-4 bg-surface border border-border">
              <p className="text-fg font-medium">{p}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
