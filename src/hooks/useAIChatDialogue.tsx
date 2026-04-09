import { useContext } from "react";
import { AIChatContext } from "../ctx/contexts/AIChatContext";

export default function useAIChatDialogue() {
  const ctx = useContext(AIChatContext);
  if (ctx) {
    return ctx;
  }
  throw new Error("AIChat context must be used in AIChat context provider!");
}
