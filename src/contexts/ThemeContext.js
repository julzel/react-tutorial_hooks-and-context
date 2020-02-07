import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const defaultThemeState = {
  isLightTheme: true,
  light: { textColor: '#555', ui: '#ddd', bg: '#eee' },
  dark: { textColor: '#ddd', ui: '#333', bg: '#555' }
}

const ThemeContextProvider = ({ children }) => {

  const [themeState, setThemeState] = useState(defaultThemeState)
  
  const toggleTheme = () => {
    const isLightTheme = !themeState.isLightTheme
    setThemeState({ ...themeState, isLightTheme })
  }

  return ( 
    <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider> 
  )
}
 
export default ThemeContextProvider