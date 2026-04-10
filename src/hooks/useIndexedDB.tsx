import { initDB, type Message, type Chat } from "@/config/indexedDB";
import { useCallback } from "react";

export const useIndexedDB = () => {
  const getDB = async () => await initDB();

  // --- Chat Actions ---
  const saveChat = useCallback(async (chat: Chat) => {
    const db = await getDB();
    return db.put("chats", chat);
  }, []);

  const getAllChats = useCallback(async () => {
    const db = await getDB();
    return (await db.getAllFromIndex("chats", "by-modified")).reverse();
  }, []);

  const deleteChat = useCallback(async (chatId: string) => {
    const db = await getDB();
    const tx = db.transaction(["chats", "messages"], "readwrite");
    // Delete chat metadata
    await tx.objectStore("chats").delete(chatId);
    // Atomic clean up: Delete all messages associated with this chat
    const index = tx.objectStore("messages").index("by-chat");
    let cursor = await index.openCursor(IDBKeyRange.only(chatId));
    while (cursor) {
      await cursor.delete();
      cursor = await cursor.continue();
    }
    await tx.done;
  }, []);

  // --- Message Actions ---
  const addMessage = useCallback(async (message: Message) => {
    const db = await getDB();
    // 1. Add the message
    const msgId = await db.add("messages", message);
    // 2. Update the lastModified of the chat to keep it at the top
    const chat = await db.get("chats", message.chatId);
    if (chat) {
      await db.put("chats", { ...chat, lastModified: Date.now() });
    }
    return msgId;
  }, []);

  const getMessagesByChat = useCallback(async (chatId: string) => {
    const db = await getDB();
    return db.getAllFromIndex("messages", "by-chat", chatId);
  },[]);

  return {
    saveChat,
    getAllChats,
    deleteChat,
    addMessage,
    getMessagesByChat,
  };
};
