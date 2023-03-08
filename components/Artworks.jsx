import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { useWindowSize } from '../helpers/useWindowSize'

import Artwork from './Artwork'

import ArtworksStyle from '../styles/artworks.style'

const Artworks = () => {
    const [art, setArt] = useContext(ArtContext)
    const size = useWindowSize()

    return (
       <ArtworksStyle>
            <div 
                className="artworks-container"
                style={{ width: size.width }}   
            >
                {art.filteredArtwork.map(artwork => {
                    return (
                        <Artwork key={artwork.slug} artwork={artwork} />
                    )
                })}
            </div>
        </ArtworksStyle>
    )
}

export default Artworks