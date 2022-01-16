import React from 'react'
import Link from 'next/link'

import Info from "../components/Info"

import styles from '../styles/bio.module.scss'

const Bio = () => {
    return (
        <div className={styles.container}>
            <p>Bio</p>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Info />
        </div>
    )
}

export default Bio