// AIChatPanel.tsx
import useAIChatDialogue from "@/hooks/useAIChatDialogue";
import ChatSidebar from "./ChatSidebar";
import AiChatMain from "./AiChatMain";
import "@css/AiChatStyles.css"

export default function AIChatPanel() {
  const { isOpen } = useAIChatDialogue();

  return (
    <div className={`chat-root ${isOpen ? "open" : ""}`}>
      <div className="chat-container">
        <ChatSidebar />
        <AiChatMain />
      </div>
    </div>
  );
}
