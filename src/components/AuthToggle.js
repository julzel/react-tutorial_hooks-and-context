import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const ThemeToggle = () => {

  const { toggleAuth } = useContext(AuthContext)

  return ( 
    <button onClick={toggleAuth}>Toggle the theme</button>
   )
}
 
export default ThemeToggle