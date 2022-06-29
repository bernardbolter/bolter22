import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'
 
import styles from '../styles/link.module.scss'

const Link = () => {
    const router = useRouter();
    const [linkReady, setLinkReady] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(
            "https://bolter.madeinberlin.net/wp-json/wp/v2/pages/57"
        )
        .then((res) => {
            setData(res.data)
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('non data')
            // setData('https://megacities.world')
        })
    }, [])

    useEffect(() => {
        if (Object.keys(data).length !== 0) {
            console.log("data ", data.acf.latestLink)
            router.push(data.acf.latestLink)
        }
    }, [data])

    return (
            <section className={styles.container}>
                <h1>Redirecting to the Latest Link</h1>
            </section>
    )
}

export default Link