import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'
import { slideUp, fadeOut } from '../animations/info'

import styles from '../styles/info.module.scss'

const Info = () => {
    const router = useRouter()
    // console.log(router)
    // console.log(slideUp)
    return (
        <div className={styles.container}>
            <Link href="/bio">
                <motion.a
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={
                        router.route === '/bio' ? slideUp :
                        router.route === '/cv' || router.route === '/statement' ? fadeOut : null
                    }
                >Bio</motion.a>
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