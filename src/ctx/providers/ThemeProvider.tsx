import { useLayoutEffect, useState, type ReactNode } from "react"
import { ThemeContext, type Theme } from "../contexts/ThemeContext"

export default function ThemeProvider({children}:{children: ReactNode}) {
    const [theme, setTheme] = useState(()=>{
        const saved = localStorage.getItem("site-theme") as Theme
        if(saved){
            return saved
        }
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        
        return prefersDark ? "dark": "light"
    })
    const value = {
        theme, setTheme
    }
    useLayoutEffect(()=>{
        const html = document.documentElement
        html.classList.remove("light", "dark")
        html.classList.add(theme)

        html.style.colorScheme = theme

        localStorage.setItem("site-theme", theme)
    } ,[theme])
  return (
    <ThemeContext.Provider value={value}>
        {
            children
        }
    </ThemeContext.Provider>
  )
}