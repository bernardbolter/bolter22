import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import InfoStyle from '../styles/info.style'

const Info = () => {
    const router = useRouter()

    return (
        <InfoStyle>
            <div className="info-wrapper">
                {}
                {router.pathname === '/bio' ? null : <Link href="/bio">Bio</Link>}
                {router.pathname === '/cv' ? null : <Link href="/cv">CV</Link>}
                {router.pathname === '/statement' ? null : <Link href="/statement">Statement</Link>}
            </div>
        </InfoStyle>
    )
}

export default Info