import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import { ArtContext } from '../providers/ArtProvider'

import styles from '../styles/exhibit.module.scss'

const Exhibit = () => {
    const [art, setArt] = useContext(ArtContext)
    console.log(art.filteredArtwork)
    const [position, setPosition] = useState(0)
    const [currentArtwork, setCurrentArtwork] = useState({})
    console.log(currentArtwork)

    useEffect(() => {
        const interval = setInterval(changeArt, 4000)
        return () => clearInterval(interval)
    }, [art.filteredArtwork])

    useEffect(() => {
        console.log(art.filteredArtwork)
        if (art.filteredArtwork.length !== 0) {
            setCurrentArtwork(art.filteredArtwork[position])
        }
    }, [position])

    const changeArt = () => {
        const lastIndex = art.filteredArtwork.length - 1
        setPosition(position => {
            return position === lastIndex ? 0 : position + 1
        })

    }

    return (
        
                <motion.div 
                    className={styles.container}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <AnimatePresence>
                    <p>{currentArtwork.title}</p>
                    <img src={`https://madeinberlin.net/artworks/${currentArtwork.seriesSlug}/${currentArtwork.slug}/${currentArtwork.slug}_lg.jpg`} alt="cliff" />
                    </AnimatePresence>
                </motion.div>
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
    )
}

export default Exhibit