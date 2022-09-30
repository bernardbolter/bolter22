import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
 
import styles from '../styles/link.module.scss'

const Link = () => {
    const router = useRouter();

    useEffect(() => {
            router.push("https://www.youtube.com/watch?v=FFw_jIrXbgk&t=17s")
    }, [])

    return (
            <section className={styles.container}>
                <h1>Redirecting...</h1>
            </section>
    )
}

export default Link