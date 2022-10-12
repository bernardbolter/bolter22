import React, { useState, useEffect, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { ThemeProvider } from 'styled-components'
import LayoutStyle from '../styles/layout.styles'

import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'
import randomTheme from '../themes/randomTheme'

const Layout = ({ children }) => {
    const [art, setArt] = useContext(ArtContext)
    let [currentTheme, setCurrentTheme] = useState(lightTheme)

    useEffect(() => {
      if (art.theme === 'dark') {
        setCurrentTheme(darkTheme)
      } else  {
        setCurrentTheme(lightTheme)
      }
    }, [art.theme])

    return (
      <ThemeProvider theme={currentTheme}>
        <LayoutStyle>
          <div className="layout-wrapper">
            {children}
          </div>
        </LayoutStyle>
      </ThemeProvider>
    )
}

export default Layout