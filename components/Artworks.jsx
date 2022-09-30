import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import styles from '../styles/artworks.module.scss'

const Artworks = () => {
    // console.log(posts)
    const [art, setArt] = useContext(ArtContext)
    console.log(art.filteredArtwork)

    return (
        <div className={styles.container}>
            <p>Under Construction,</p>
            <p>Check back soon.</p>
        </div>
    )
}

export default Artworks