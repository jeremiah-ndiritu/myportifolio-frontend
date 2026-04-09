import useAIChatDialogue from "@hooks/useAIChatDialogue";
import Button from "../UI/Button";
import { ArrowUp } from "lucide-react";

const AiChat = () => {
  const { isOpen } = useAIChatDialogue();
  return (
    isOpen && (
      <section className="absolute top-10 right-0 w-[40%] min-h-[85vh] p-2 bg-white rounded shadow-lg z-40">
        {/* Header */}
        <h1 className="text-center text-2xl font-semibold mb-6">
          AI Assistance
        </h1>

        {/* Chat Window */}
        <div className="bg-popover text-start text-primary rounded p-4 min-h-[5em] mb-6">
          Hi, do you want to discuss your project with me?
        </div>

        {/* Input Area */}
        <div className="flex flex-col">
          <label htmlFor="aiinput" className="sr-only">
            Chat input
          </label>
          <textarea
            id="aiinput"
            placeholder="Type your message..."
            className="w-full text-primary border border-border rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <Button
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

export default AiChat;
