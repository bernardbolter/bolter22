import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { ArtContext } from '../providers/ArtProvider'

import { getBioData } from '../lib/api'

import Info from '../components/Info'
import Name from '../components/Name'
import Arrow from '../svg/arrow'

import BioStyle from '../styles/bio.style'

const Bio = ({ bioData }) => {
    const [art, setArt] = useContext(ArtContext)
    const router = useRouter()

    useEffect(() => {
        if (Object.keys(bioData).length !== 0) {
            setArt(state => ({
                ...state,
                sourceInfo: bioData.artistInfo,
                bio: bioData.page.content
            }))
        }
    }, [bioData, setArt])

    return (
        <BioStyle>
            <div className="bio-container">
                <Name />
                <Info />
                <div 
                    className="bio-back"
                    onClick={() => router.push('/')}    
                >
                    <Arrow />
                </div>
                <div className="bio-content"
                    dangerouslySetInnerHTML={{ __html: art.bio }}
                />
            </div>
        </BioStyle>
    )
}

export default Bio

export async function getStaticProps() {
    const bioData = await getBioData()

    return {
        props: {
            bioData
        },
        revalidate: 10,
    }
}