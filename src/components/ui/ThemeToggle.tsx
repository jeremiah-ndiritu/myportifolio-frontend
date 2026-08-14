import useTheme from "@/hooks/useTheme"
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme()
  return (
    <div className="text-primary cursor-pointer" onClick={()=> {setTheme(theme === "dark"? "light" : "dark")}}>
        {
            theme === "dark" ? (
                <FaSun size={20} />
            ) : ( 
                <FaMoon size={20} />
            )
        }
    </div>
  )
}
