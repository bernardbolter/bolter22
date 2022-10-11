import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import SwitchModeStyle from '../styles/switch-mode.style.js'
import { motion } from 'framer-motion'

const SwitchMode = () => {
    const [art, setArt] = useContext(ArtContext)

    return (
        <SwitchModeStyle>
            <div 
                className="switchmode-container"
                onClick={() => setArt(state => ({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' }))}
            >
                <motion.p>{art.theme === 'dark' && 'light'}</motion.p>
                    <motion.span 

                    />
                <motion.p>{art.theme === 'light' && 'dark'}</motion.p>
            </div>
        </SwitchModeStyle>
    )
}

export default SwitchMode