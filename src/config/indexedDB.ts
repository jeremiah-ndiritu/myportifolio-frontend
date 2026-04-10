import { openDB, type DBSchema, type IDBPDatabase } from "idb";

export interface Message {
  id?: number;
  chatId: string;
  text: string;
  sender: "User" | "AI";
  timestamp: number;
}

export interface Chat {
  id: string; // Using UUIDs for chats
  title: string;
  topic?: string;
  lastModified: number;
}

interface ChatDB extends DBSchema {
  chats: {
    key: string;
    value: Chat;
    indexes: { "by-modified": number };
  };
  messages: {
    key: number;
    value: Message;
    indexes: { "by-chat": string };
  };
}

const DB_NAME = "ai_chat_db";
const DB_VERSION = 1;

export const initDB = (): Promise<IDBPDatabase<ChatDB>> => {
  return openDB<ChatDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // chats Store
      const chatStore = db.createObjectStore("chats", { keyPath: "id" });
      chatStore.createIndex("by-modified", "lastModified");

      // Messages Store
      const messageStore = db.createObjectStore("messages", {
        keyPath: "id",
        autoIncrement: true,
      });
      messageStore.createIndex("by-chat", "chatId");
    },
  });
};
