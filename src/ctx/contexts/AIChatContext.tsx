import { createContext, type SetStateAction } from "react";

export type AIChatContextType = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const AIChatContext = createContext<AIChatContextType | null>(null)