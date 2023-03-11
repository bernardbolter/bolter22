import { useState, useEffect, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import Image from "next/image"
import { useWindowSize } from '../helpers/useWindowSize'
import { motion } from 'framer-motion'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

import { decideColor } from '../helpers'
import { getStaticArtworkPaths, getFullArtworkProps } from '../lib/api'
import ArtStyle from "../styles/art.style"

import Enlarged from '../components/Enlarged'
import LongArrow from '../svg/long-arrow'
import Magnify from '../svg/magnify'
import Unmagnify from '../svg/unmagnify'

const artLoader = ({ src }) => {
    return `https://thefilterman.de/artwork/${src}_lg.jpg`
}

const Art = ({ arts }) => {
    const { slug, title } = arts.artwork
    const artwork = arts.artwork.artworkFields
    const [art, setArt] = useContext(ArtContext)
    const size = useWindowSize()
    const theme = useTheme()
    const router = useRouter()
    const src = `${artwork.series}/${slug}/${slug}`
    
    const [artEnlarge, setArtEnlarge] = useState(false)
    const [artForward, setArtForward] = useState(false)
    const [artWidth, setArtWidth] = useState(0)
    const [artHeight, setArtHeight] = useState(0)

    useEffect(() => {
        if (artwork.proportion > 1) {
            if (((size.width * .95) / artwork.proportion) > (size.height * .95)) {
                setArtWidth((size.height * .95) * artwork.proportion)
                setArtHeight(size.height * .95)
            } else {
                setArtWidth(size.width * .95)
                setArtHeight((size.width * .95) / artwork.proportion)
            }
        } else if (artwork.proportion < 1) {
            if (((size.height * .95) * artwork.proportion) > (size.width * .95)) {
                setArtWidth(size.width * .95)
                setArtHeight((size.width * .95) / artwork.proportion)
            } else {
                setArtWidth((size.height * .95) * artwork.proportion)
                setArtHeight(size.height * .95)
            }
        } else {
            if (size.width <= size.height) {
                setArtWidth(size.width * .85)
                setArtHeight(size.width * .85)
            } else {
                setArtWidth(size.height * .85)
                setArtHeight(size.height * .85)
            }
        }
        console.log(artHeight, artWidth)
    }, [artwork, size])

    return (
        <ArtStyle>
            <div className="art-container">
                <div 
                    className="art-name"
                    onClick={() => router.push('/')}
                >
                    <h1>Bernard John Bolter IV</h1>
                    <LongArrow />
                </div>
                <div className="artwork-full-container">
                    <Image
                        loader={artLoader}
                        src={src}
                        alt={`${title} from the ${artwork.series}, by Bernard Bolter`}
                        width={artWidth}
                        height={artHeight}
                        placeholder="blur"
                        blurDataURL="/globe.gif"
                        style={{ zIndex: artForward ? '501' : '401' }}
                        onClick={() => setArtForward(!artForward)}
                    />
                </div>
                <div 
                    className="detail-container"
                    style={{ zIndex: artForward ? '401' : '501' }}
                    onClick={() => setArtForward(!artForward)}
                >
                    <h1>{title}</h1>
                    <h2>{artwork.medium}</h2>
                    <h2>{artwork.width} x {artwork.height}</h2>
                    <h2>{artwork.year}</h2>
                    <div
                        className="detail-box"
                        style={{ backgroundColor: theme.colors[decideColor(artwork.series)]}}
                    />
                </div>
                <div 
                    className="art-enlarge"
                    onClick={() => setArtEnlarge(!artEnlarge)}
                    style={{ zIndex: artEnlarge ? 1002 : 602 }}
                >
                    {artEnlarge ? <Unmagnify /> : <Magnify />}
                    <div className="art-enlarge-back" />
                </div>
                {artEnlarge && (
                    <Enlarged 
                        url={`https://thefilterman.de/artwork/${artwork.series}/${slug}/${slug}_xl.jpg`} 
                        alt={`${title} from the ${artwork.series}, by Bernard John Bolter IV`}
                        proportion={artwork.proportion}
                        orientation={artwork.orientation}   
                    />
                )}
            </div>
        </ArtStyle>
    )
}

export default Art

export async function getStaticPaths() {
    const staticPaths = await getStaticArtworkPaths()

    const paths = staticPaths.allArtwork.nodes.map(artwork => ({
        params: { slug: artwork.slug }
    }))

    return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
    const allSlugs = await getStaticArtworkPaths();
    const artId = await allSlugs.allArtwork.nodes.filter(data => data.slug === params.slug);
    const arts = await getFullArtworkProps(artId[0].id);

    return {
      props: {
        arts,
      },
      revalidate: 10,
    };
}
