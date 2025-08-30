// src/components/ThemeProvider.jsx

//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\components\ThemeProvider.js
"use client";

import { useState, useEffect, createContext, useContext } from "react";

// Create a context to share the theme state
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export the custom hook for easy use in child components
export function useTheme() {
  return useContext(ThemeContext);
}  