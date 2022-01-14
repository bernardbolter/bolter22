import React from 'react'
import Link from 'next/link'

import styles from '../styles/statement.module.scss'

const Statement = () => {
    return (
        <div className={styles.container}>
            <p>Statement</p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default Statement