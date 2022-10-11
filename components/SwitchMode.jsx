import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import SwitchModeStyle from '../styles/switch-mode.style'
import { useTheme } from 'styled-components'

const SwitchMode = () => {
    const [art, setArt] = useContext(ArtContext)
    const theme = useTheme()
    console.log("switch theme: ", theme)

    const onToggle = () => setArt(state => ({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' }))

    return (
        <SwitchModeStyle>
            <div className="switchmode-container">
                <label>
                    <input type="checkbox" checked={art.theme ==='light'} onChange={onToggle} />
                    <span />
                </label>
                <p>switch to mode</p>
            </div>
        </SwitchModeStyle>
    )
}

export default SwitchMode