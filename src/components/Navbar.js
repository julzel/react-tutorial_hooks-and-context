// Example uses useContext
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  const navbarStyle = {
    color: theme.textColor,
    backgroundColor: theme.ui
  }

  return ( 
    <nav className="navbar" style={navbarStyle}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav> 
  );
}
 
export default Navbar;