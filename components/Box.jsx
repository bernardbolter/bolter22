import React, { useState, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { motion } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'
import { decideColor } from '../helpers'
import { useTheme } from 'styled-components'

import styles from '../styles/box.module.scss'

const Box = ({ values }) => {
    const [art] = useContext(ArtContext)
    const size = useWindowSize()
    const theme = useTheme()
    const [bgColor] = useState(decideColor(values.slug))

    return (
        <motion.div
            key={values.slug}
            className={art.filterArray.includes(values.slug) ? `${styles.box} ${styles.boxOn}` : styles.box}
            initial={{ background: '#696969', x: values.x1, y: values.y1 }}
            animate={{
                background: art.showFilterNav 
                    ? theme.colors[bgColor]
                    : '#696969',
                x: art.showFilterNav ? values.x2 : values.x1,
                y: art.showFilterNav 
                    ? size.width < 550 ? values.y3 : values.y2 
                    : values.y1,
                transition: { duration: art.showFilterNav ? .7 : 1 }
            }}
        />  
    )
}

export default Box