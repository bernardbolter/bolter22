import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import Info from '../components/Info'
import Name from '../components/Name'

import styles from '../styles/bio.module.scss'

const Bio = () => {
    const [art, setArt] = useContext(ArtContext)
    console.log(art.bio)

    return (
        <div className={styles.container}>
            {/* <Name /> */}
            <Info />
            <div className={styles.content}>
              {art.bio.length !==0 && art.bio}
            </div>
        </div>
    )
}


export default Bio