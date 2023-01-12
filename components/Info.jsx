import React from 'react'
import Link from 'next/link'

import InfoStyle from '../styles/info.style'

const Info = () => {
    return (
        <InfoStyle>
            <div className="info-wrapper">
                <Link href="/bio">Bio</Link>
                <Link href="/cv">CV</Link>
                <Link href="/statement">Statement</Link>
            </div>
        </InfoStyle>
    )
}

export default Info