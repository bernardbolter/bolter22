import React from 'react'
import Link from 'next/link'

import styles from '../styles/info.module.scss'

const Info = () => {
    return (
        <div className={styles.container}>
            <Link href="/bio">
                <a>Bio</a>
            </Link>
            <Link href="/cv">
                <a>CV</a>
            </Link>
            <Link href="/statement">
                <a>Statement</a>
            </Link>
        </div>
    )
}

export default Info