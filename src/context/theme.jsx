import { useState } from "react"
import { createContext } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

    const[theme, setTheme] = useState('Clouds')

    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider