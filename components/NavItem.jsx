import React, { useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtContext } from '../providers/ArtProvider'

import { navItem } from '../animations/nav'
import styles from '../styles/nav-item.module.scss'

const NavItem = ({ item, type }) => {
    const [art, setArt] = useContext(ArtContext)
    console.log(item)

    return (
        <AnimatePresence>
            <motion.p 
                className={styles.container}
                variants={navItem}
                key={item.slug}
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
        </AnimatePresence>
    )
}

export default NavItem