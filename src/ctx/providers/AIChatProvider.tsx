import { useState, type ReactNode } from "react"
import { AIChatContext } from "../contexts/AIChatContext"

export default function AIChatProvider({children}:{children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(false)
    const value = {
        isOpen, setIsOpen
    }
  return (
    <AIChatContext.Provider value={value}>
        {
            children
        }
    </AIChatContext.Provider>
  )
}
