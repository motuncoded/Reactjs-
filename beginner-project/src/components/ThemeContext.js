import { createContext, createContext, useState } from "react";

const createContext = createContext(undefined)

export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState("light")
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme: ()  => setTheme(theme === "light" ? "dark" : "light"),}}>
            { children }
    </ThemeContext.Provider>
    ) 
}