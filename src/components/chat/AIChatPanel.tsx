// AIChatPanel.tsx
import useAIChatDialogue from "@/hooks/useAIChatDialogue";
import ChatSidebar from "./ChatSidebar";
import AiChatMain from "./AiChatMain";
import "@css/AiChatStyles.css";
import { useState } from "react";

export default function AIChatPanel() {
  const { isOpen } = useAIChatDialogue();
  const [visible, setVisible] = useState(false);

  return (
    isOpen && (
      <div
        className={`chat-root ${isOpen ? "open" : ""} border border-l-border bg-background overflow-y-hidden fixed top-16 h-[90vh]`}
      >
        <div className="chat-container relative">
          {visible && <ChatSidebar />}
          <AiChatMain fit={visible} setVisible={setVisible} />
        </div>
      </div>
    )
  );
}
