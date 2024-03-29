import React, { useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtContext } from '../providers/ArtProvider'
import { useTheme } from 'styled-components'

import { navItem } from '../animations/nav'
import NavItemStyle from '../styles/nav-item.style'

const NavItem = ({ item }) => {
    const [art, setArt] = useContext(ArtContext)
    const theme = useTheme()

    return (
        <AnimatePresence>
            <NavItemStyle>
                <motion.p 
                    className="nav-text"
                    variants={navItem}
                    key={item.slug}
                    style={{
                        color: art.filterArray.includes(item.slug) ? theme.colors.fg : null
                    }}
                    onClick={() => {
                        setArt(state => ({
                            ...state,
                            filterArray: state.filterArray.includes(item.slug)
                            ? state.filterArray.filter(x => x !== item.slug)
                            : [...state.filterArray, item.slug]
                        }))
                    }}
                >
                    {item.name}
                </motion.p>
            </NavItemStyle>
        </AnimatePresence>
    )
}

export default NavItem