import React from 'react'
import Link from 'next/link'

import styles from '../styles/cv.module.scss'

const Cv = () => {
    return (
        <div className={styles.container}>
            <p>CV</p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default Cv