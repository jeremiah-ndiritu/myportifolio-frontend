import React from "react";

type Props = { steps: string[] };

const Process: React.FC<Props> = ({ steps }) => {
  return (
    <section id="process" className="py-16 bg-bg text-fg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <p className="text-muted mb-6">
          A simple, four-step approach to remove friction and automate the right
          tasks.
        </p>

        <ol className="space-y-4 list-decimal list-inside">
          {steps.map((s) => (
            <li
              key={s}
              className="bg-surface p-4 border border-border rounded-md"
            >
              <div className="font-medium">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
