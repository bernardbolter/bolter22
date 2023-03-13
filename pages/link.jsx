import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
 
import LinkStyle from '../styles/link.style';

const Link = () => {
    const router = useRouter();

    useEffect(() => {
            router.push("https://www.youtube.com/watch?v=FFw_jIrXbgk&t=17s")
    }, [router])

    return (
        <LinkStyle>
            <section className="link-container">
                <h1>Redirecting...</h1>
            </section>
        </LinkStyle>
    )
}

export default Link