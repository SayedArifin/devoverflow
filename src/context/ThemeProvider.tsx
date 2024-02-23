"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode
}
interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState("")

    useEffect(() => {
        const handleThemeChange = () => {
            if (mode === "dark") {
                setMode("light")
                document.documentElement.classList.add("light")
            } else {
                setMode("dark")
                document.documentElement.classList.add("dark")
            }
        }
        handleThemeChange()
    }, [mode])
    return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used with a ThemeProvider")
    }
    return context;
}