import React, { useState, useEffect, createContext } from 'react'

import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'
import { randomTheme } from '../themes/randomTheme'

export const ThemeStyleContext = createContext()

const ThemeStyleProvider = ({ children }) => {
    const [themeStyle, setThemeStyle] = useState({
        theme: lightTheme,
        themeName: "light",
        allThemes: [
            lightTheme,
            darkTheme
        ],
        randomTheme: false,
        randomClick: true,
        themeNames: []
    })

    useEffect(() => {
        themeStyle.allThemes.forEach(theme => {
            // console.log(theme)
            setThemeStyle(state => ({ ...state, themesNames: [...state.themeNames, theme.name] }))
        })
        // console.log(themeStyle.themeNames)
    }, [])

    useEffect(() => {
        var newTheme
        if (themeStyle.randomTheme) {
            newTheme = randomTheme(themeStyle.themeName)
        } else {
            newTheme = themeStyle.allThemes.find(theme => {
                return theme.name === themeStyle.themeName
            })
        }

        // console.log(newTheme)
        
        if (Object.keys(newTheme).length !== 0) {
            setThemeStyle(state => ({...state, theme: newTheme }))
        }
    }, [themeStyle.themeName, themeStyle.randomTheme, themeStyle.randomClick])

    return (
        <ThemeStyleContext.Provider
            value={[themeStyle, setThemeStyle]}
        >
            {children}
        </ThemeStyleContext.Provider>
    )
}

export default ThemeStyleProvider