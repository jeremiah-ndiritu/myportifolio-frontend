import type { Message } from "@/config/indexedDB";
import JerePng from "@images/jeremiah-ai-pic-in-suit-passport.png";
import { cn } from "@lib/cn";

interface MessageProps {
  message: Message;
  position: "left" | "right";
  userImage?: string; // Specific prop for the user's avatar
}

const ChatMessage = ({ message, position, userImage }: MessageProps) => {
  const { text, sender, timestamp } = message;
  const isAI = sender === "AI";
  const isRight = position === "right";

  // Format timestamp for a subtle modern look (e.g., 4:14 PM)
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(timestamp));

  return (
    <div
      className={cn(
        "group flex w-full mb-6 gap-3 items-end animate-in fade-in slide-in-from-bottom-2 duration-300",
        isRight ? "flex-row-reverse" : "flex-row",
      )}
    >
      {/* Profile Image */}
      <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
        <img
          src={
            isAI
              ? JerePng
              : userImage || JerePng // "https://placehold.co/36x36?text=Me"
          }
          alt={isAI ? "Jeremy" : "Me"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bubble Container */}
      <div
        className={cn(
          "flex flex-col max-w-[80%]",
          isRight ? "items-end" : "items-start",
        )}
      >
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
            {isAI ? "Jeremy" : "Me"}
          </span>
          <span className="text-[10px] text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
            {formattedTime}
          </span>
        </div>

        <div
          className={cn(
            "p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm transition-all",
            isRight
              ? "bg-blue-600 text-white rounded-tr-sm" // Swapped to tr for top-right "tail"
              : "bg-white text-slate-800 border border-slate-100 rounded-tl-sm",
          )}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
