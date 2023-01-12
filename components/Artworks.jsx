import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import Masonary, { ResponsiveMasonry } from 'react-responsive-masonry'
import Artwork from './Artwork'

import ArtworksStyle from '../styles/artworks.style'

const Artworks = () => {
    const [art, setArt] = useContext(ArtContext)

    return (
       <ArtworksStyle>
            <div className="artworks-container">
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