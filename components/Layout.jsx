import React, { useState, useMemo, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { ThemeProvider } from 'styled-components'

import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'
import randomTheme from '../themes/randomThemes'

const Layout = ({ children }) => {
    const [art, setArt] = useContext(ArtContext)

    const switchTheme = useMemo(() => {
      switch(art.theme) {
        case 'light':
          return lightTheme
          break;
        case 'dark':
          return darkThem
          break;
        case 'random':
          setCurrentTheme(randomTheme)
          break;
        default:
          setCurrentTheme(lightTheme)
      }
    }, [art.theme])

    return (
      <ThemeProvider themes={currentTheme}>
        {children}
      </ThemeProvider>
    )
}

export default Layout