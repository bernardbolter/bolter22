import React, { useState, useEffect, createContext } from 'react'
import { shuffle } from '../utils'

export const ArtContext = createContext()

const ArtProvider = ({ children }) => {
    const [art, setArt] = useState({
        // artworks
        sourceArtwork: {},
        originalArtwork: [],
        filteredArtwork: [],
        currentArtwork: {},
        exhibitPosition: 0,
        // cv
        sourceCV: {},
        cv: { 'info' : {}, 'education' : []},
        // pages
        sourcePages: {},
        bio: '',
        statement: '',
        // navigation
        showFilterNav: false,
        viewArtworks : false,
        sortValue: 'random',
        filterArray: [],
        searchValue: ""
    })

    //  shape Wordpress artwork data into an array
    useEffect(() => {
        if (Object.keys(art.sourceArtwork).length !== 0) {
           var shapedArtwork = []
           art.sourceArtwork.nodes.map(art => {
            var newArt = art.artwork
            newArt["slug"] = art.slug
            shapedArtwork.push(newArt)
           })
           setArt(state => ({ 
                ...state, 
                originalArtwork: shapedArtwork, 
                filteredArtwork: shuffle(shapedArtwork)
            }))
            setArt(state => ({
                ...state,
                currentArtwork: state.filteredArtwork[0]
            }))
        }
    }, [art.sourceArtwork])

    // shape Wordpress CV Entries
    useEffect(() => {
        if (Object.keys(art.sourceCV).length !== 0) {
            const tempCV = { 'info' : {}, 'education' : []}
            art.sourceCV.nodes.map(entry => {
                if (entry.cv.category === "Info") {
                    const tempCities = []
                    if (entry.cv.workCity1 !== null) {tempCities.push(entry.cv.workCity1)}
                    if (entry.cv.workCity2 !== null) {tempCities.push(entry.cv.workCity2)}
                    const tempLinks = []
                    if (entry.cv.link1 !== null) {tempLinks.push(entry.cv.link1)}
                    if (entry.cv.link2 !== null) {tempLinks.push(entry.cv.link2)}
                    tempCV.info = { 'name' : entry.cv.name,
                                    'birthYear' : entry.cv.birthYear,
                                    'birthCity' : entry.cv.birthCity,
                                    'workCities' : tempCities,
                                    'links' : tempLinks
                                }
                }
                if (entry.cv.category === 'Education') {
                    tempCV.education.push({
                        'city' : entry.cv.city,
                        'direction' : entry.cv.direction,
                        'school' : entry.cv.school,
                        'year' : entry.cv.year,
                        'date' : entry.date 
                        })
                }
            })
            setArt(state => ({ ...state, cv: tempCV }))
        }
    }, [art.sourceCV])

    // shape Wordpress Pages
    useEffect(() => {
        if (Object.keys(art.sourcePages).length !== 0) {
            art.sourcePages.edges.map(page => {
                if (page.node.slug === 'bio') {
                    setArt(state => ({ ...state, bio: page.node.content }))
                }
            })
        }
    }, [art.sourcePages])

    return (
        <ArtContext.Provider
            value={[art, setArt]}
        >
            {children}
        </ArtContext.Provider>
    )
}

export default ({ children }) => (
    <ArtProvider>
        {children}
    </ArtProvider>
)