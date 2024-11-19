import { createContext } from "react";

const defaultThemeContext = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeContext);
