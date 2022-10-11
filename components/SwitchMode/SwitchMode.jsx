import React from 'react'

import * as S from './SwitchMode.style'
import { useTheme } from 'next-themes'

const SwitchMode = () => {
    const { theme, themes, setTheme } = useTheme()
    console.log(theme)
    console.log(themes)
    console.log(setTheme)
    const onToggle = () => setTheme(theme === 'light' ? 'dark' : 'light')
    
    return (
        <S.SwitchContainer>
            <S.SwitchLabel>
                <input type="checkbox" checked={theme ==='light'} onChange={onToggle} />
                <S.SwitchSpan />
            </S.SwitchLabel>
            <S.SwitchP>switch to mode</S.SwitchP>
        </S.SwitchContainer>
    )
}

export default SwitchMode