import React from "react";

type Props = { items: string[] };

const Solutions: React.FC<Props> = ({ items }) => {
  return (
    <section id="solutions" className="py-16 bg-bg text-fg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-4">Practical solutions</h2>
        <p className="text-muted mb-6 max-w-3xl">
          Outcome-focused categories that directly reduce manual work and
          improve accuracy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((s) => (
            <div
              key={s}
              className="bg-surface-raised border border-border rounded-lg p-4"
            >
              <h3 className="font-semibold mb-1">{s}</h3>
              <p className="text-muted text-sm">
                Practical, focused work — not long vendor engagements.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
