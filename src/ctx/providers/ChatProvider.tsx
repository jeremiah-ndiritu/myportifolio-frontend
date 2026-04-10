import type { Chat, Message } from "@/config/indexedDB";
import { useIndexedDB } from "@/hooks/useIndexedDB";
import  { useState, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const { getAllChats, getMessagesByChat, addMessage, saveChat } =
    useIndexedDB();

  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  // Load all chats (sidebar list) on mount
  useEffect(() => {
    getAllChats().then(setChats);
  }, [getAllChats]);

  // Load messages whenever the active chat changes
  useEffect(() => {
    (async () => {
        if (activeChatId) {
          getMessagesByChat(activeChatId).then(setMessages);
        } else {
          setMessages([]);
        }
    })()
  }, [activeChatId, getMessagesByChat]);

  const sendMessage = async (text: string) => {
    let currentId = activeChatId;

    // Logic: If no active chat, create one automatically
    if (!currentId) {
      currentId = crypto.randomUUID();
      const newChat: Chat = {
        id: currentId,
        title: text.slice(0, 30) + (text.length > 30 ? "..." : ""),
        lastModified: Date.now(),
      };
      await saveChat(newChat);
      setChats((prev) => [newChat, ...prev]);
      setActiveChatId(currentId);
    }

    const newMessage: Message = {
      chatId: currentId,
      text,
      sender: "User",
      timestamp: Date.now(),
    };

    // Update UI instantly
    setMessages((prev) => [...prev, newMessage]);

    // Persist to IndexedDB
    await addMessage(newMessage);

    // TODO: Trigger your AI API call here and addMessage for the response!
  };

  const createNewChat = () => setActiveChatId(null);

  return (
    <ChatContext.Provider
      value={{
        chats,
        messages,
        activeChatId,
        setActiveChatId,
        sendMessage,
        createNewChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
