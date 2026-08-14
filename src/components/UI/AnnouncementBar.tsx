import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Button from "./Button";

type AnnouncementBarProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  onDismiss: () => void;
};

const AnnouncementBar = ({
  title,
  description,
  href,
  cta,
  onDismiss,
}: AnnouncementBarProps) => {
  const isExternalLink = href.startsWith("http");

  return (
    <div className="relative z-999 border-b border-border bg-primary/10 text-fg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
            New
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-fg">{title}</p>
            <p className="hidden truncate text-muted sm:block">{description}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {isExternalLink ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="primary" size="sm" className="rounded-full px-4">
                {cta}
              </Button>
            </a>
          ) : (
            <Link to={href} className="inline-flex items-center">
              <Button variant="primary" size="sm" className="rounded-full px-4">
                {cta}
              </Button>
            </Link>
          )}

          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss announcement"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-surface-raised hover:text-fg"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
