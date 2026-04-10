import { useCallback, useEffect, useRef, useState } from "react"; // 1. Import hooks
import useAIChatDialogue from "@hooks/useAIChatDialogue";
import Button from "../UI/Button";
import { ArrowUp, X } from "lucide-react";
import JerePng from "@images/jeremiah-ai-pic-in-suit-passport.png";
import { toast } from "sonner";
import { useChat } from "@/hooks/useChat";
import ChatMessage from "./ChatMessage";
import ChatSidebar from "./ChatSidebar";

import "@css/AiChatStyles.css";

const AiChatMain = () => {
  const [message, setMessage] = useState("");
  const { isOpen, setIsOpen } = useAIChatDialogue(); // 2. Ensure you have the setter
  const { messages, sendMessage } = useChat();

  const modalRef = useRef<HTMLElement>(null); // 3. Create a ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = useCallback(async () => {
    if (!message) {
      return toast.warning("Please tell me something 😊");
    }

    await sendMessage(message.trim());
    toast.success("Sentn");
    setMessage("");
  }, [message, sendMessage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the modal is open and if the click was NOT on the modal element
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true); // Close the modal
      }
    };

    function eModule() {
      const keys = new Array<string>(2);
      const handleTextAreaEnter = (e: KeyboardEvent) => {
        if (keys.length >= 2) {
          keys.unshift(e.key);
        }
        keys.push(e.key);
        if (keys.join("-") === "Shift-Enter") {
          return;
        }
        if (e.key === "Enter") {
          handleSendMessage();
        }
      };
      return { handleTextAreaEnter };
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", eModule().handleTextAreaEnter);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", eModule().handleTextAreaEnter);
    };
  }, [isOpen, setIsOpen, handleSendMessage]);

  const fadedBackgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${JerePng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    isOpen && (
      <section
        ref={modalRef} // 4. Attach the ref here
        style={fadedBackgroundStyle}
        className="fixed flex flex-col top-15 right-0 w-[40%] min-h-[85vh] p-2 rounded shadow-lg z-40"
      >
        {/* Exit Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-gray-600 hover:text-black transition-colors backdrop-blur-md border border-white/30"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
        {/* Header */}
        <header className="mb-6">
          <ChatSidebar />
          <h1 className="text-center text-2xl font-semibold tracking-tight">
            AI Assistance
          </h1>
        </header>

        <div className="flex flex-col">
          <div className="bg-popover text-start text-primary rounded p-4 min-h-[5em] mb-6">
            Hi, do you want to discuss your project with me?
          </div>
          {messages.length ? (
            messages.map((m) => (
              <ChatMessage key={m.id} message={m} position="right" />
            ))
          ) : (
            <p>Start a new chat</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="aiinput" className="sr-only">
            Chat input
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            ref={textareaRef}
            value={message}
            id="aiinput"
            placeholder="Type your message..."
            className="w-full text-primary border border-border rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <Button
            onClick={handleSendMessage}
            variant={"primary"}
            rightIcon={ArrowUp}
            type="button"
            className="mt-3 self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </Button>
        </div>
      </section>
    )
  );
};

export default AiChatMain;
