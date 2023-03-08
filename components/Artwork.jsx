import { useState, useEffect } from 'react'
import Image from 'next/image'

import { useWindowSize } from '../helpers/useWindowSize'

import ArtworkStyles from '../styles/artwork.style'

const artLoader = ({ src }) => {
    return `https://thefilterman.de/artwork/${src}_xl.jpg`
}

const getSeriesColor = series => {
    
}

const Artwork = ({artwork}) => {
    const src = `${artwork.series}/${artwork.slug}/${artwork.slug}`
    const size = useWindowSize()
    const [artContainer, setArtContainer] = useState(0)
    const [artWidth, setArtWidth] = useState(0)
    const [artHeight, setArtHeight] = useState(0)


    useEffect(() => {
        var responsiveWidth
        if (size.width < 550) {
            responsiveWidth = size.width
        } else if (size.width < 900) {
            responsiveWidth = size.width * .5
        } else if (size.width < 1300) {
            responsiveWidth = size.width * .3333
        } else responsiveWidth = size.width * .25

        setArtContainer(responsiveWidth)

        if (artwork.orientation === 'square') {
            if (artwork.size === 'xl') {
                setArtWidth(responsiveWidth * .8)
                setArtHeight(responsiveWidth * .8)
            } else if (artwork.size === 'lg') {
                setArtWidth(responsiveWidth * .75)
                setArtHeight(responsiveWidth * .75)
            } else if (artwork.size === 'md') {
                setArtWidth(responsiveWidth * .7)
                setArtHeight(responsiveWidth * .7)
            } else if (artwork.size === "sm") {
                setArtWidth(responsiveWidth * .65)
                setArtHeight(responsiveWidth * .65)
            } else {
                setArtWidth(responsiveWidth * .85)
                setArtHeight(responsiveWidth * .85)
            }
        } else if (artwork.orientation === 'portrait') {
            if (artwork.size === "xl") {
                setArtWidth((responsiveWidth * artwork.proportion) * .99)
                setArtHeight(responsiveWidth * .99)
            } else if (artwork.size === "lg") {
                setArtWidth((responsiveWidth * artwork.proportion) * .96)
                setArtHeight(responsiveWidth * .96)
            } else if (artwork.size === "md") {
                setArtWidth((responsiveWidth * artwork.proportion) * .93)
                setArtHeight(responsiveWidth * .93)
            } else if (artwork.size === "sm") {
                setArtWidth((responsiveWidth * artwork.proportion) * .9)
                setArtHeight(responsiveWidth * .9)
            } else {
                setArtWidth(responsiveWidth * .8)
                setArtHeight(responsiveWidth * .8)
            }
        } else if (artwork.orientation === 'landscape') {
            if (artwork.size === "xl") {
                setArtWidth(responsiveWidth * .99)
                setArtHeight((responsiveWidth / artwork.proportion) * .99)
            } else if (artwork.size === "lg") {
                setArtWidth(responsiveWidth * .96)
                setArtHeight((responsiveWidth / artwork.proportion) * .96)
            } else if (artwork.size === "md") {
                setArtWidth(responsiveWidth * .93)
                setArtHeight((responsiveWidth / artwork.proportion) * .93)
            } else if (artwork.size === "sm") {
                setArtWidth(responsiveWidth * .9)
                setArtHeight((responsiveWidth / artwork.proportion) * .9)
            } else {
                setArtWidth(responsiveWidth * .8)
                setArtHeight(responsiveWidth * .8)
            }
        } else {
            setArtWidth(responsiveWidth * .8)
            setArtHeight(responsiveWidth * .8) 
        }
    }, [artwork, size])

    
    return (
        <ArtworkStyles>
            <div 
                className="artwork-container"
                style={{
                    width: `${artContainer}px`,
                    height: `${artContainer}px`,
                    margin: 0,
                    padding: 0
                }}
                onClick={() => console.log(artwork.title)}
            >
                <Image
                    loader={artLoader}
                    src={src}
                    alt={`${artwork.title} from the ${artwork.series}`}
                    width={artWidth}
                    height={artHeight}
                 />
                 <div 
                    className="artwork-info-container"
                    style={{ 
                        width: artWidth,
                        bottom: ((artContainer - artHeight) / 2) - 15
                    }}    
                >
                    <p className="artwork-title">{artwork.title}</p>
                    <div 
                        className="artwork-title-series-box" 
                        style={{ backgroundColor: 'blue' }}
                    />
                </div>
            </div>
        </ArtworkStyles>
    )
}

export default Artwork