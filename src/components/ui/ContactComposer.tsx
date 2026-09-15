import { useEffect, useState } from "react";
import { Mail, MessageCircle, MessageSquare, X } from "lucide-react";
import Button from "./Button";

const CONTACT_EMAIL = "ndiritunjeri06@gmail.com";
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE ?? "";

type ContactComposerProps = {
  open: boolean;
  onClose: () => void;
};

const formatMessage = (title: string, message: string) =>
  title.trim() ? `*${title.trim()}*\n\n${message.trim()}` : message.trim();

export default function ContactComposer({
  open,
  onClose,
}: ContactComposerProps) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!open) return null;

  const getMessage = () => {
    if (!message.trim()) {
      setError("Please write a message first.");
      return null;
    }

    setError("");
    return formatMessage(title, message);
  };

  const sendWithWhatsApp = () => {
    const formattedMessage = getMessage();
    if (!formattedMessage || !CONTACT_PHONE) return;
    window.open(
      `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
        formattedMessage,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const sendSms = () => {
    const formattedMessage = getMessage();
    if (!formattedMessage || !CONTACT_PHONE) return;
    window.location.href = `sms:${CONTACT_PHONE}?body=${encodeURIComponent(
      formattedMessage,
    )}`;
  };

  const sendEmail = () => {
    const formattedMessage = getMessage();
    if (!formattedMessage) return;
    const subject = title.trim() ? encodeURIComponent(title.trim()) : "";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(
      formattedMessage,
    )}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-composer-title"
        className="w-full max-w-lg fixed top-16 rounded-lg border border-border bg-surface p-5 text-fg shadow-xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 id="contact-composer-title" className="text-lg font-semibold">
            Let&apos;s Talk
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact composer"
            className="rounded-md p-2 text-muted transition-colors hover:bg-muted/10 hover:text-fg"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title (optional)"
            aria-label="Title (optional)"
            className="h-10 w-full rounded-md border border-border bg-surface-raised px-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              if (event.target.value.trim()) setError("");
            }}
            placeholder="Write your message..."
            aria-label="Message"
            aria-invalid={Boolean(error)}
            rows={6}
            className="w-full resize-y rounded-md border border-border bg-surface-raised px-3 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          {error && <p className="text-sm text-danger">{error}</p>}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            onClick={sendWithWhatsApp}
            disabled={!CONTACT_PHONE}
            leftIcon={MessageCircle}
            title={
              !CONTACT_PHONE ? "Phone number is not configured" : undefined
            }
          >
            Send with WhatsApp
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={sendSms}
            disabled={!CONTACT_PHONE}
            leftIcon={MessageSquare}
            title={
              !CONTACT_PHONE ? "Phone number is not configured" : undefined
            }
          >
            Send SMS
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={sendEmail}
            leftIcon={Mail}
          >
            Send as Email
          </Button>
        </div>
      </section>
    </div>
  );
}
