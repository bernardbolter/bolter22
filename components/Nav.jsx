import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles/nav.module.scss'

const Nav = () => {
    return (
        <motion.div className={styles.container}>
            <p>Nav</p>
        </motion.div>
    )
}

export default Nav