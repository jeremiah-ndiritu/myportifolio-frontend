import "@css/AiChatStyles.css";
import { useChat } from "@/hooks/useChat";
import { toast } from "sonner";

export default function ChatSidebar() {
  const { chats, createNewChat, activeChatId, setActiveChatId } = useChat();
  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    toast.info("Will handle manually!");
  };

  return (
    <aside className="sidebar w-[50%] left-0 z-60 h-full top-0">
      <div className="sidebar-top">
        <button onClick={createNewChat} className="new-chat">
          + New Chat
        </button>
      </div>

      <div className="sidebar-list">
        {chats.length ? (
          chats.map((chat) => (
            <div
              onContextMenu={handleContextMenu}
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`chat-item ${
                activeChatId === chat.id ? "active" : ""
              }`}
            >
              {chat.title}
            </div>
          ))
        ) : (
          <p className="text-muted">No chats yet</p>
        )}
      </div>
    </aside>
  );
}
