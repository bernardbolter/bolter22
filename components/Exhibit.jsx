import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import { ArtContext } from '../providers/ArtProvider'

import styles from '../styles/exhibit.module.scss'

const Exhibit = () => {
    const [art, setArt] = useContext(ArtContext)
    console.log(art.filteredArtwork)
    // const [position, setPosition] = useState(0)
    // const [currentArtwork, setCurrentArtwork] = useState({})
    // console.log(currentArtwork)

    useEffect(() => {
        const interval = setInterval(changeArt, 10000)
        return () => clearInterval(interval)
    }, [art.exhibitPosition])

    useEffect(() => {
        console.log(art.filteredArtwork)
        if (art.filteredArtwork.length !== 0) {
            console.log(art.currentArtwork)
            setArt(state => ({ ...state, currentArtwork: art.filteredArtwork[art.exhibitPosition] }))
            // setCurrentArtwork(art.filteredArtwork[art.exhibitPosition])
        }
    }, [art.exhibitPosition])

    const changeArt = () => {
        const lastIndex = art.filteredArtwork.length - 1
        console.log("last: ",lastIndex)
        setArt(state => ({ ...state, exhibitPosition: art.exhibitPosition === lastIndex ? 0 : art.exhibitPosition + 1}))
        console.log("position: ", art.exhibitPosition)
        // setPosition(position => {
        //     return position === lastIndex ? 0 : position + 1
        // })
    }

    console.log(art.currentArtwork)

    if (Object.keys(art.currentArtwork).length === 0) {
        return <div />
    } else {

        return (
            <AnimatePresence>
                <motion.div 
                    className={styles.container}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    key={art.currentArtwork.slug}
                >
                    
                    <p>{art.currentArtwork.slug}</p>
                    <div>
                        <Image 
                            src={`https://www.madeinberlin.net/artworks/${art.currentArtwork.series}/${art.currentArtwork.slug}/${art.currentArtwork.slug}_xl.jpg`}
                            alt="artwork"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }
        // <>
        // {Object.values(currentArtwork).length !== 0 && (
        //     <AnimatePresence>
        //         <motion.div 
        //             className={styles.container}
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             exit={{ opacity: 0 }}
        //             transition={{ duration: 1 }}
        //         >
        //             <p>{currentArtwork.title}</p>
        //         </motion.div>
        //     </AnimatePresence>
        // )}
        // </>
    
}

export default Exhibit