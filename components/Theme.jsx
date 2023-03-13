import React, { useState, useEffect, useContext } from 'react'
import { ThemeStyleContext } from '../providers/ThemeStyleProvider'
import { ThemeProvider } from 'styled-components'
import ThemeStyle from '../styles/theme.style'

const Theme = ({ children }) => {
    const [themeStyle] = useContext(ThemeStyleContext)
    const [currentTheme, setCurrentTheme] = useState({})

    // console.log("current: ", currentTheme)

    useEffect(() => {
        setCurrentTheme(themeStyle.theme)
        console.log(currentTheme)
    }, [themeStyle.theme, currentTheme])

    if (Object.keys(currentTheme).length !== 0) {
        return (
            <ThemeProvider theme={currentTheme}>
                <ThemeStyle theme={currentTheme}>
                    {children}
                </ThemeStyle>
            </ThemeProvider>
        )
    } else return null
}

export default Theme