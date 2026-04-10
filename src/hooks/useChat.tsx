import { ChatContext } from "@contexts/ChatContext";
import { useContext } from "react";

// Custom hook for easy access
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
};
