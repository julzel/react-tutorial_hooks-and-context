// Example uses Context Consumer
import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Booklist = () => {

  return ( 
    <ThemeContext.Consumer>
      {context => {
        const { isLightTheme, light, dark } = context
        const theme = isLightTheme ? light : dark
        const bookListStyle = {
          color: theme.textColor,
          backgroundColor: theme.bg
        }
        const bookItemStyle = {
          backgroundColor: theme.ui
        }
        return (
          <div className="book-list" style={bookListStyle}>
            <ul>
              <li style={bookItemStyle}>The way of kings</li>
              <li style={bookItemStyle}>The name of the wind</li>
              <li style={bookItemStyle}>The final empire</li>
            </ul>
          </div> 
        )
      }}
    </ThemeContext.Consumer>
  )
}
 
export default Booklist