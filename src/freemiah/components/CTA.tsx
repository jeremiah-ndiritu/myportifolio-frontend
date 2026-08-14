import React from "react";
import Button from "@/components/ui/Button";

type Props = { id?: string };

const CTA: React.FC<Props> = ({ id = "contact" }) => {
  return (
    <section id={id} className="py-16 bg-surface text-fg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Have repetitive work slowing your business down?
        </h2>
        <p className="text-muted mb-6">
          Let’s build a better way — small, practical, and focused on outcomes.
        </p>
        <a href="mailto:hello@jeremiahn.dev">
          <Button className="bg-primary text-white px-6 py-3 rounded-md">
            Contact Freemiah
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
