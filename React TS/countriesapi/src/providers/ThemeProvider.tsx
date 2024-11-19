import { ReactNode, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider = ({ children } : {children:ReactNode}) => {
    const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "light");
  
    useEffect(() => {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [theme]);
  
    const toggleTheme = () => {
      const updatedTheme = theme === "light" ? "dark" : "light";
      setTheme(updatedTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  