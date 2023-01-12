import React from 'react'
import Link from 'next/link'

import Info from '../components/Info'

import styles from '../styles/cv.module.scss'

const Cv = () => {
    return (
        <div className={styles.container}>
            <p>CV</p>
            <Link href="/">Home</Link>
            <Info />
        </div>
    )
}

export default Cv