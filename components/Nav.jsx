import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'
import { useTheme } from 'styled-components'

import Box from '../components/Box'
import Search from '../components/Search'
import NavItem from './NavItem'
import SortItem from './SortItem'
import SwitchMode from './SwitchMode'

import { Minimize } from '../svg/minimize'

import {
    links,
    navItem
} from '../animations/nav'

import NavStyle from '../styles/nav.style'

// import styles from '../styles/nav.module.scss'

const filterValues = [
    {slug: 'mediums-of-war', name: 'Mediums of War', x1: -60, x2: -22, y1: 10, y2: 150, y3: 150},
    {slug: 'a-colorful-history', name: 'A Colorful History', x1: -40, x2: -22, y1: 10, y2: 172, y3: 176},
    {slug: 'megacities', name: "Megacities", x1: -20, x2: -22, y1: 10, y2: 194, y3: 201},
    {slug: 'digital-city-series', name: 'Digital City Series', x1: -60, x2: -22, y1: 30, y2: 216, y3: 226},
    {slug: 'art-collision', name: 'Art Collision', x1: -40, x2: -22, y1: 30, y2: 238, y3: 251},
    {slug: 'vanishing-landscapes', name: 'Vanishing Landscapes', x1: -20, x2: -22, y1: 30, y2: 261, y3: 276},
    {slug: 'og', name: 'OG Artwork', x1: -60, x2: -22, y1: 50, y2: 282, y3: 301},
    {slug: 'installations', name: 'Installations', x1: -40, x2: -22, y1: 50, y2: 305, y3: 325},
    {slug: 'photography', name: 'Photography', x1: -20, x2: -22, y1: 50, y2: 327, y3: 350},
    {slug: 'videos', name: 'Videos', x1: -20, x2: -22, y1: 50, y2: 349, y3: 376}
]

const sortValues = [
    {slug: 'random', name: 'Random'},
    {slug: 'newest', name: 'Newsest'},
    {slug: 'oldest', name: 'Oldest'}
]

const Nav = () => {
    const [art, setArt] = useContext(ArtContext)
    const size = useWindowSize()
    const theme = useTheme()

    return (
    <NavStyle>
        {/* navigation background */}
        <motion.div
            className="nav-background"
            key="nav-background-mobile"
            style={{ 
                width: size.width, 
                height: size.height,
                zIndex: 301
            }}
            initial={{ translateX: size.width }}
            animate={{ translateX: art.showFilterNav ? size.width < 550 ? size.width - 235 : size.width - 215 : size.width }}
            transition={{ duration: 1 }}
        />

        
        <div className="nav-container">
            <motion.p 
                className="filter-text"
                initial={{ opacity: 1 }}
                animate={{ opacity: art.showFilterNav ? 0 : 1 }}
                transition={{ duration: 1,  }}
                >filter & sort
            </motion.p>

            {/* hidden div for clicking the navigation open */}
            <div 
                className={!art.showFilterNav ? "box-click" : "box-click box-click-hide"} 
                onClick={() => setArt(state => ({...state, showFilterNav: true}))}
            />

            {/* boxes for filter menu */}
            <div className="box">
                {filterValues.map(values => {
                    return (
                        <Box values={values} key={values.slug} />
                    )
                })}
            </div>

            <AnimatePresence>

                {/* top menu items that slide in from right */}
                {art.showFilterNav && (
                    <motion.div
                        className="search-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        key="search"
                    >
                        <div
                            className="minimize"
                            onClick={() => setArt(state => ({ ...state, showFilterNav: false }))}
                        >
                            <Minimize />
                        </div>
                        <Search />
                        <div className="for-sale">
                            <NavItem  item={{ name: 'Artwork for Sale', slug: 'forSale' }} type="filter" />
                            <div 
                                className={art.filterArray.includes('forSale') ? "box box-on" : "box"}
                                style={{ background: theme.colors.sale, position: 'relative' }}
                            />
                        </div>
                    </motion.div>
                )}
                {art.showFilterNav && (
                    <motion.div className="nav-links" variants={links} initial="exhibit" animate="artwork" exit="exit" key="links">

                            <motion.p variants={navItem} className="by">filter by:</motion.p>

                            {filterValues.map(filter => <NavItem item={filter} key={filter.slug} />)}
                            
                            <motion.p variants={navItem} className="by">sort by:</motion.p>

                            {sortValues.map(sort => <SortItem item={sort} key={sort.slug} />)}
                            
                            <motion.div 
                                variants={navItem} 
                                className="clear"
                                onClick={() => setArt(state => ({...state, filterArray: []}))}
                                style={{ visibility: art.filterArray.length === 0 ? 'hidden' : 'visible' }}
                            >
                                <p>clear filters</p>
                                <svg>
                                    <path
                                        fill={theme.colors.warning}
                                        d="M10 0C4.46667 0 0 4.46667 0 10C0 15.5333 4.46667 20 10 20C15.5333 20 20 15.5333 20 10C20 4.46667 15.5333 0 10 0ZM10 19.5556C4.73333 19.5556 0.444444 15.2667 0.444444 10C0.444444 4.73333 4.73333 0.444444 10 0.444444C15.2667 0.444444 19.5556 4.73333 19.5556 10C19.5556 15.2667 15.2667 19.5556 10 19.5556V19.5556Z"
                                    />
                                    <path
                                        fill={theme.colors.warning}
                                        d="M10.3111 10L14.4889 5.82222C14.5777 5.7334 14.5777 5.59993 14.4889 5.51112C14.4001 5.4223 14.2666 5.4223 14.1778 5.51112L10 9.68889L5.71112 5.40001C5.6223 5.31118 5.48884 5.31118 5.40002 5.40001C5.3112 5.48883 5.3112 5.62229 5.40002 5.71111L9.68891 10L5.51113 14.1778C5.42231 14.2666 5.42231 14.4001 5.51113 14.4889C5.55562 14.5334 5.62227 14.5555 5.66676 14.5555C5.71125 14.5555 5.7779 14.5334 5.82239 14.4889L10.0002 10.3111L14.2891 14.6C14.3335 14.6445 14.4002 14.6666 14.4447 14.6666C14.4892 14.6666 14.5558 14.6445 14.6003 14.6C14.6891 14.5112 14.6891 14.3777 14.6003 14.2889L10.3111 10Z" 
                                    />
                                </svg>
                            </motion.div>
                        <SwitchMode />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </NavStyle>
    )
}

export default Nav