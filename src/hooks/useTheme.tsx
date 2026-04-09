import { ThemeContext } from '@/ctx/contexts/ThemeContext'
import {useContext} from 'react'

export default function useTheme() {
    const ctx = useContext(ThemeContext)
    if(ctx)  return ctx
    throw new Error("Theme context must be used inside theme provider!");
    
}
