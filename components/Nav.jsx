import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { motion, AnimatePresence } from 'framer-motion'

import { 
    navContainer,
    war,
    links,
    item
} from '../animations/nav'

import styles from '../styles/nav.module.scss'

const filterValues = [
    {slug: 'mediums_of_war', name: 'Mediums of War'},
    {slug: 'a_colorful_history', name: 'A Colorful History'},
    {slug: 'megacities', name: "Megacities"},
    {slug: 'digital_city_series', name: 'Digital City Series'},
    {slug: 'art_collision', name: 'Art Collision'},
    {slug: 'vanishing_landscapes', name: 'Vanishing Landscapes'},
    {slug: 'installations', name: 'Installations'},
    {slug: 'photography', name: 'Photography'},
    {slug: 'og', name: 'OG Artwork'}
]

const sortValues = [
    {slug: 'random', name: 'Random'},
    {slug: 'newest', name: 'Newsest'},
    {slug: 'oldest', name: 'Oldest'}
]

const Nav = () => {
    const [art, setArt] = useContext(ArtContext)
    console.log(art.filterArray)
    console.log(art.sortArray)
    return (
        <div  className={styles.container} >
            <motion.div 
                className={styles.boxes}
                initial="initial"
                onClick={() => setArt(state => ({...state, viewArtworks: !state.viewArtworks}))}    
            >
                <motion.div
                    className={styles.box}
                    variants={war}
                    animate={art.viewArtworks ? war.artwork : war.exhibit}
                />
                <motion.div
                    className={styles.box}
                />
            </motion.div>
            <AnimatePresence>
                {art.viewArtworks && (
                    <motion.div
                        className={styles.navLinks}
                        variants={links}
                        initial="exhibit"
                        animate="artwork"
                        exit="exit"
                    >
                    <motion.div
                        className={styles.toExhibit}
                        onClick={() => setArt(state => ({...state, viewArtworks: false}))}
                        variants={item}
                    >
                        <p>exhibition</p>
                        <div className={styles.arrow}>
                            <span className={styles.top} />
                            <span className={styles.shaft} />
                            <span className={styles.bottom} />
                        </div>
                    </motion.div>

                    <motion.p variants={item} className={styles.by}>filter by:</motion.p>

                    {filterValues.map(filter => {
                        return (
                            <motion.p
                                className={styles.slug}
                                key={filter.slug}
                                variants={item}
                                onClick={() => {
                                    setArt(state => ({
                                        ...state,
                                        filterArray: state.filterArray.includes(filter.slug)
                                        ? state.filterArray.filter(item => item !== filter.slug)
                                        : [...state.filterArray, filter.slug]
                                    }))
                                }}
                            >{filter.name}</motion.p>
                        )
                    })}
                    
                    <motion.p variants={item} className={styles.by}>sort by:</motion.p>

                    {sortValues.map(sort => {
                        return (
                            <motion.p
                                className={styles.slug}
                                key={sort.slug}
                                variants={item}
                                onClick={() => {
                                    setArt(state => ({
                                        ...state,
                                        sortArray: state.sortArray.includes(sort.slug)
                                        ? state.sortArray.filter(item => item !== sort.slug)
                                        : [...state.sortArray, sort.slug]
                                    }))
                                }}
                            >{sort.name}</motion.p>
                        )
                    })}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Nav