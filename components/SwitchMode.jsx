import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import SwitchModeStyle from '../styles/switch-mode.style.js'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'styled-components'

const SwitchMode = () => {
    const [art, setArt] = useContext(ArtContext)
    const theme = useTheme()

    return (
        <SwitchModeStyle>
            <AnimatePresence>
                <div 
                    className="switchmode-container"
                    onClick={() => setArt(state => ({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' }))}
                >
                    {art.theme === 'dark' 
                        && <motion.p 
                            className='light'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .5 }}
                        >lightMode</motion.p>
                    }
                        <motion.span 
                            
                        />
                    {art.theme === 'light' 
                        && <motion.p 
                            className='dark'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .5 }}
                        >darkMode</motion.p>
                    }
                </div>
            </AnimatePresence>
        </SwitchModeStyle>
    )
}

export default SwitchMode