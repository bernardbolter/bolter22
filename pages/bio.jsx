import React, { useEffect, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import { getBioData } from '../lib/api'

import Info from '../components/Info'
import Name from '../components/Name'

import styles from '../styles/bio.module.scss'

const Bio = ({ bioData }) => {
    const [art, setArt] = useContext(ArtContext)

    useEffect(() => {
        if (Object.keys(bioData).length !== 0) {
            console.log("send info")
            setArt(state => ({
                ...state,
                sourceInfo: bioData.artistInfo
            }))
        }
    }, [bioData])

    return (
        <div className={styles.container}>
            <Name />
            <Info />
            <div className={styles.content}>
              {art.bio.length !==0 && art.bio}
            </div>
        </div>
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