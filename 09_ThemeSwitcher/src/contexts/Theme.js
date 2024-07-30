import { createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

const ThemeProvider = ThemeContext.Provider;

export { ThemeProvider, ThemeContext };
