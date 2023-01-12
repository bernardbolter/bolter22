import React from 'react'
import Image from 'next/image'

import ArtworkStyles from '../styles/artwork.style'

const artLoader = ({ src }) => {
    return `https://madeinberlin.net/artwork/${src}_xl.jpg`
}

const Artwork = ({artwork}) => {
    console.log(artwork)
    const figureArtSize = () => {

    }
    const src = `${artwork.series}/${artwork.slug}/${artwork.slug}`
    return (
        <ArtworkStyles>
            <div className="artwork-container">
                <Image
                    loader={artLoader}
                    src={src}
                    alt={`${artwork.title} from the ${artwork.series}`}
                    fill
                />
            </div>
        </ArtworkStyles>
    )
}

export default Artwork