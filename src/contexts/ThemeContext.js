import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const defaultThemeState = {
  isLightTheme: true,
  light: { textColor: '#555', ui: '#ddd', bg: '#eee' },
  dark: { textColor: '#ddd', ui: '#333', bg: '#555' }
}

const ThemeContextProvider = ({ children }) => {

  const [themeState] = useState(defaultThemeState)

  return ( 
    <ThemeContext.Provider value={{ ...themeState }}>
      {children}
    </ThemeContext.Provider> 
  )
}
 
export default ThemeContextProvider