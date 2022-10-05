import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import styles from '../styles/artworks.module.scss'

const Artworks = () => {
    // console.log(posts)
    const [art, setArt] = useContext(ArtContext)
    // console.log(art.filteredArtwork)

    return (
        <div className={styles.container}>
            {/* <p>Under Construction</p> */}
            {art.filteredArtwork.map(artwork => {
                // console.log(artwork)
                return (
                    <div key={artwork.slug}>
                        <p>{artwork.slug}</p>
                        <p>width: {artwork.width}</p>
                        <p>height: {artwork.height}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Artworks