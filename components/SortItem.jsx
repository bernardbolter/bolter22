import React, {useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtContext } from '../providers/ArtProvider'
import { useTheme } from 'styled-components'

import { navItem } from '../animations/nav'
import NavItemStyle from '../styles/nav-item.style'

const SortItem = ({ item }) => {
    const [art, setArt] = useContext(ArtContext)
    const theme = useTheme()

    return (
        <AnimatePresence>
            <NavItemStyle>
                <motion.p
                    className="nav-text"
                    variants={navItem}
                    key={item.slug}
                    onClick={() => {
                        setArt(state => ({ ...state, sortValue: item.slug }))
                    }}
                    style={{
                        color: art.sortValue === item.slug ? theme.colors.fg : null
                    }}
                >
                    {item.name}
                    {art.sortValue === item.slug && <span className="sort-box" />}
                </motion.p>
            </NavItemStyle>
        </AnimatePresence>
    )
}

export default SortItem