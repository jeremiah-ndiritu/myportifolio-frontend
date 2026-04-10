import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react"; // 1. Import hooks
import useAIChatDialogue from "@hooks/useAIChatDialogue";
import Button from "../UI/Button";
import { ArrowUp, Folder, X } from "lucide-react";
import JerePng from "@images/jeremiah-ai-pic-in-suit-passport.png";
import { toast } from "sonner";
import { useChat } from "@/hooks/useChat";
import ChatMessage from "./ChatMessage";

import "@css/AiChatStyles.css";

const AiChatMain = ({
  setVisible,
}: {
  fit?: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}) => {
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

    const handleTextAreaEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        handleSendMessage();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleTextAreaEnter);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleTextAreaEnter);
    };
  }, [isOpen, setIsOpen, handleSendMessage]);

  const fadedBackgroundStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.90)), url(${JerePng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      ref={modalRef} // 4. Attach the ref here
      style={fadedBackgroundStyle}
      className={`fixed bg-card flex flex-col justify-between top-0 right-0 grow h-[85vh] p-2 rounded shadow-lg z-40`}
    >
      {/* Exit Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-gray-600 hover:text-black transition-colors backdrop-blur-md border border-white/30"
        aria-label="Close chat"
      >
        <X size={18} />
      </button>
      <button
        onClick={() => setVisible((p) => !p)}
        className="cursor-e-resize absolute top-0 left-0 z-30"
        title="toggle-sidebar"
        aria-label="Toggle chats"
      >
        <Folder />
      </button>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-primary text- text-2xl font-semibold tracking-tight">
          Chat with Jeremiah
        </h1>
      </header>

      <div className="messages flex shrink grow flex-col overflow-y-scroll">
        {/* <div className="bg-popover text-start text-primary rounded p-4 min-h-[5em] mb-6">
            Hi, do you want to discuss your project with me?
          </div> */}
        {messages.length ? (
          messages.map((m) => (
            <ChatMessage key={m.id} message={m} position="right" />
          ))
        ) : (
          <p>Start a new chat</p>
        )}
      </div>
      <div className="flex justify-between gap-2 sticky bottom-1">
        <label htmlFor="aiinput" className="sr-only">
          Chat input
        </label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          ref={textareaRef}
          value={message}
          id="aiinput"
          placeholder="..."
          className="w-full text-primary border border-border rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={1}
        />
        <Button
          onClick={handleSendMessage}
          variant={"primary"}
          rightIcon={ArrowUp}
          type="button"
          title="send-btn"
          className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        ></Button>
      </div>
    </section>
  );
};

export default AiChatMain;
