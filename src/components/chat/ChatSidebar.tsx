import "@css/AiChatStyles.css";
import { useChat } from "@/hooks/useChat";

export default function ChatSidebar() {
  const { chats, createNewChat, activeChatId, setActiveChatId } = useChat();

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <button onClick={createNewChat} className="new-chat">
          + New Chat
        </button>
      </div>

      <div className="sidebar-list">
        {chats.length ? (
          chats.map((chat) => (
            <div
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
