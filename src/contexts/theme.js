import { createContext, useContext } from "react";
// step 1 : create the context (with default state)
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// step 2 : create the context provider with values
export const ThemeProvider = ThemeContext.Provider; //values still not given

// step 3 : wrap the main loading page (say inside App.jsx) in the context provider

// step 4 : Now we use this . We can use the passed values now by using the hook over the context.
export default function useTheme() {
  return useContext(ThemeContext);
}
