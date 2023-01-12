import React, { useContext } from 'react'
import { ThemeStyleContext } from '../providers/ThemeStyleProvider'
import { ArtContext } from '../providers/ArtProvider'
import { useTheme } from 'styled-components'

import SwitchModeStyle from '../styles/switch-mode.style.js'
import { AnimatePresence, motion } from 'framer-motion'
import Random from '../svg/random'
import Moon from '../svg/moon'
import Sun from '../svg/sun'

const SwitchMode = () => {
    const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext)
    const [art] = useContext(ArtContext)
    const theme = useTheme()

    return (
        <SwitchModeStyle>
            <AnimatePresence>
                <motion.div 
                    className="switchmode-wrapper"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: art.showFilterNav ? 0 : 200 }}
                    exit={{ translateX: 0 }}
                    transition={{  duration: 2 }}
                >
                    <div 
                        className="switchmode"
                        onClick={() => setThemeStyle(state => ({ ...state, themeName: state.themeName === 'light' ? 'dark' : 'light', randomTheme: false }))}
                    >
                        {themeStyle.themeName === 'dark' 
                            && <motion.p 
                                className='light'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}
                            >light</motion.p>
                        }
                        {themeStyle.themeName === 'light' ? <Moon /> : <Sun />}
                        {themeStyle.themeName === 'light' 
                            && <motion.p 
                                className='dark'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}
                            >dark</motion.p>
                        }
                    </div>
                    <div 
                        className="random-wrapper"
                        onClick={() => setThemeStyle(state => ({ ...state, randomTheme: true, randomClick: !state.randomClick }))}    
                    >
                        <p>random</p>
                        <Random />
                    </div>
                </motion.div>
            </AnimatePresence>
        </SwitchModeStyle>
    )
}

export default SwitchMode