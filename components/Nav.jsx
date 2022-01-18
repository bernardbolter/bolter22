import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { motion, AnimatePresence } from 'framer-motion'

import {
    links,
    item
} from '../animations/nav'

import styles from '../styles/nav.module.scss'

const filterValues = [
    {slug: 'mediums_of_war', name: 'Mediums of War', x1: -60, x2: -22, y1: 10, y2: 112, color: '#6D2E46'},
    {slug: 'a_colorful_history', name: 'A Colorful History', x1: -40, x2: -22, y1: 10, y2: 133, color: '#9DC3C2'},
    {slug: 'megacities', name: "Megacities", x1: -20, x2: -22, y1: 10, y2: 154, color: '#FC7753'},
    {slug: 'digital_city_series', name: 'Digital City Series', x1: -60, x2: -22, y1: 30, y2: 176, color: '#F6BD60'},
    {slug: 'art_collision', name: 'Art Collision', x1: -40, x2: -22, y1: 30, y2: 197, color: '#99C2A2'},
    {slug: 'vanishing_landscapes', name: 'Vanishing Landscapes', x1: -20, x2: -22, y1: 30, y2: 218, color: '#7B8CDE'},
    {slug: 'installations', name: 'Installations', x1: -60, x2: -22, y1: 50, y2: 238, color: '#A27E8E'},
    {slug: 'photography', name: 'Photography', x1: -40, x2: -22, y1: 50, y2: 259, color: '#2D4654'},
    {slug: 'og', name: 'OG Artwork', x1: -20, x2: -22, y1: 50, y2: 280, color: '#659B5E'}
]

const sortValues = [
    {slug: 'random', name: 'Random'},
    {slug: 'newest', name: 'Newsest'},
    {slug: 'oldest', name: 'Oldest'}
]

const Nav = () => {
    const [art, setArt] = useContext(ArtContext)
    console.log(art.filterArray)
    console.log(art.sortValue)
    return (
        <div  className={styles.container}>
            <div 
                className={!art.viewArtworks ? styles.boxClick: `${styles.boxClick} ${styles.boxClickHide}`} 
                onClick={() => setArt(state => ({...state, viewArtworks: true, slideRight: false}))}
            />
            <motion.div 
                className={styles.boxes}
                initial={{opacity: 1}}
                animate={{opacity: art.slideRight ? 0 : 1}}   
            >
                {filterValues.map(value => {
                    return (
                        <motion.div
                            key={value.slug}
                            className={art.filterArray.includes(value.slug) ? `${styles.box} ${styles.boxOn}` : styles.box}
                            initial={{ background: '#696969', x: value.x1, y: value.y1 }}
                            animate={{
                                background: art.viewArtworks ? value.color : '#696969',
                                x: art.viewArtworks ? value.x2 : value.x1,
                                y: art.viewArtworks ? value.y2 : value.y1,
                                transition: { duration: art.viewArtworks ? .7 : 1 }
                            }}
                        />  
                    )
                })}
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
                            onClick={() => setArt(state => ({...state, viewArtworks: false, slideRight: false}))}
                            variants={item}
                        >
                            <p>exhibition</p>
                            <div className={styles.arrow}>
                                <span className={styles.top} />
                                <span className={styles.shaft} />
                                <span className={styles.bottom} />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className={styles.slide}
                            onClick={() => setArt(state => ({...state, slideRight: !state.slideRight}))}
                        >
                            <svg className={styles.spin} viewBox="0 0 20 20">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.91666 10C3.91666 9.86193 4.02859 9.75 4.16666 9.75H16.6667C16.8047 9.75 16.9167 9.86193 16.9167 10C16.9167 10.1381 16.8047 10.25 16.6667 10.25H4.16666C4.02859 10.25 3.91666 10.1381 3.91666 10Z" />
                                <motion.path 
                                    animate={{ 
                                        x: art.slideRight ? -8.5 : 0,
                                        rotate: art.slideRight ? 85 : 0
                                    }}
                                    transition={{
                                        duration: .6
                                    }}
                                    fillRule="evenodd" clipRule="evenodd" d="M12.3232 5.65657C12.4209 5.55894 12.5791 5.55894 12.6768 5.65657L16.8434 9.82323C16.9411 9.92086 16.9411 10.0792 16.8434 10.1768C16.7458 10.2744 16.5875 10.2744 16.4899 10.1768L12.3232 6.01012C12.2256 5.91249 12.2256 5.7542 12.3232 5.65657Z" />
                                <motion.path
                                    animate={{ 
                                        x: art.slideRight ? -8.5 : 0,
                                        rotate: art.slideRight ? -85 : 0
                                    }}
                                    transition={{
                                        duration: .6
                                    }}
                                    fillRule="evenodd" clipRule="evenodd" d="M12.3232 14.3434C12.4209 14.4411 12.5791 14.4411 12.6768 14.3434L16.8434 10.1768C16.9411 10.0792 16.9411 9.92086 16.8434 9.82323C16.7458 9.7256 16.5875 9.7256 16.4899 9.82323L12.3232 13.9899C12.2256 14.0875 12.2256 14.2458 12.3232 14.3434Z" />
                            </svg>
                        </motion.div>
         
                        <motion.div 
                            className={art.slideRight ? `${styles.slideRight} ${styles.slideRightOn}` : styles.slideRight}
                            initial={{ x: 0}}
                            animate={{ x: art.slideRight ? 200 : 0 }}
                            transition={{ type: "tween", duration: .4, stiffness: 10 }}
                        >
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
                                                sortValue: sort.slug
                                            }))
                                        }}
                                    >
                                        {sort.name}
                                        {art.sortValue === sort.slug && <span className={styles.sortBox} />}    
                                    </motion.p>
                                )
                            })}
                            
                            <motion.div 
                                variants={item} 
                                className={styles.clear}
                                onClick={() => setArt(state => ({...state, filterArray: []}))}
                            >
                                <motion.svg 
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{
                                        type: "tween",
                                        duration: .5
                                    }}
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0C4.46667 0 0 4.46667 0 10C0 15.5333 4.46667 20 10 20C15.5333 20 20 15.5333 20 10C20 4.46667 15.5333 0 10 0ZM10 19.5556C4.73333 19.5556 0.444444 15.2667 0.444444 10C0.444444 4.73333 4.73333 0.444444 10 0.444444C15.2667 0.444444 19.5556 4.73333 19.5556 10C19.5556 15.2667 15.2667 19.5556 10 19.5556V19.5556Z"/>
                                    <motion.path 
                                        
                                        d="M10.3111 10L14.4889 5.82222C14.5777 5.7334 14.5777 5.59993 14.4889 5.51112C14.4001 5.4223 14.2666 5.4223 14.1778 5.51112L10 9.68889L5.71112 5.40001C5.6223 5.31118 5.48884 5.31118 5.40002 5.40001C5.3112 5.48883 5.3112 5.62229 5.40002 5.71111L9.68891 10L5.51113 14.1778C5.42231 14.2666 5.42231 14.4001 5.51113 14.4889C5.55562 14.5334 5.62227 14.5555 5.66676 14.5555C5.71125 14.5555 5.7779 14.5334 5.82239 14.4889L10.0002 10.3111L14.2891 14.6C14.3335 14.6445 14.4002 14.6666 14.4447 14.6666C14.4892 14.6666 14.5558 14.6445 14.6003 14.6C14.6891 14.5112 14.6891 14.3777 14.6003 14.2889L10.3111 10Z" />
                                </motion.svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Nav