import type { Chat, Message } from "@/config/indexedDB";
import { createContext } from "react";

interface ChatContextType {
  chats: Chat[];
  messages: Message[];
  activeChatId: string | null;
  setActiveChatId: (id: string | null) => void;
  sendMessage: (text: string) => Promise<void>;
  createNewChat: () => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);




