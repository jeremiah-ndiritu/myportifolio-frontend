import React from "react";
import Card from "@/components/ui/Card";

type Example = { title: string; desc: string };
type Props = { items: Example[] };

const Examples: React.FC<Props> = ({ items }) => {
  return (
    <section id="examples" className="py-16 bg-bg text-fg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <p className="text-muted mb-6 max-w-3xl">
          Real, small-scope work that makes teams faster and less error-prone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((e) => (
            <Card key={e.title} className="p-4 bg-surface border border-border">
              <h3 className="font-semibold mb-2">{e.title}</h3>
              <p className="text-muted text-sm">{e.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
