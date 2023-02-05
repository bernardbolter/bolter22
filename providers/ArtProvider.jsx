import React, { useState, useEffect, createContext } from 'react'
import { shuffle } from '../utils'

export const ArtContext = createContext()

const ArtProvider = ({ children }) => {
    const [art, setArt] = useState({
        // theme
        theme: 'light',
        // artworks
        sourceArtwork: {},
        originalArtwork: [],
        filteredArtwork: [],
        currentArtwork: {},
        exhibitPosition: 0,
        // artist info
        sourceInfo: {},
        artistInfo: {},
        // cv
        sourceCV: {},
        cv: {},
        // pages
        bio: '',
        statement: '',
        // navigation
        showFilterNav: false,
        viewArtworks : false,
        sortValue: 'random',
        filterArray: [],
        searchValue: ""
    })

    // shape artist info data
    useEffect(() => {
        console.log(art.sourceInfo)
        if (Object.keys(art.sourceInfo).length !== 0) {
            const tempCities = []
            const tempLinks = []
            if (art.sourceInfo.artistInfo.workcity1 !== null) {tempCities.push(art.sourceInfo.artistInfo.workcity1)}
            if (art.sourceInfo.artistInfo.workcity2 !== null) {tempCities.push(art.sourceInfo.artistInfo.workcity2)}
            if (art.sourceInfo.artistInfo.workcity3 !== null) {tempCities.push(art.sourceInfo.artistInfo.workcity3)}
            if (art.sourceInfo.artistInfo.link1 !== null) {tempLinks.push(art.sourceInfo.artistInfo.link1)}
            if (art.sourceInfo.artistInfo.link2 !== null) {tempLinks.push(art.sourceInfo.artistInfo.link2)}
            if (art.sourceInfo.artistInfo.link3 !== null) {tempLinks.push(art.sourceInfo.artistInfo.link3)}
            if (art.sourceInfo.artistInfo.link4 !== null) {tempLinks.push(art.sourceInfo.artistInfo.link4)}
            if (art.sourceInfo.artistInfo.link5 !== null) {tempLinks.push(art.sourceInfo.artistInfo.link5)}
            setArt(state => ({
                ...state,
                artistInfo: {
                    name: art.sourceInfo.artistInfo.name,
                    birthyear: art.sourceInfo.artistInfo.birthyear,
                    birthcity: art.sourceInfo.artistInfo.birthcity,
                    workCities: tempCities,
                    links: tempLinks
                }
            }))
        }
    }, [art.sourceInfo])

    //  shape Wordpress artwork data into an array
    useEffect(() => {
        if (Object.keys(art.sourceArtwork).length !== 0) {
           var shapedArtwork = []
           art.sourceArtwork.nodes.map(art => {
            var newArt = art.artworkFields
            newArt["slug"] = art.slug
            newArt["title"] = art.title
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
            var newCV = {
                "SOLO" : [],
                "GROUP" : [],
                "PERFORMANCE" : [],
                "EDUCATION" : [],
                "PUBLICATIONS" : [],
                "ORGANIZATIONS" : []
            }
            console.log(art.sourceCV)
            art.sourceCV.nodes.map(cv => {
                if (cv.cv_info_fields.section === "SOLO") {
                    newCV['SOLO'].push(cv.cv_info_fields)
                }
                if (cv.cv_info_fields.section === "GROUP") {
                    newCV['GROUP'].push(cv.cv_info_fields)
                }
                if (cv.cv_info_fields.section === "PERFORMANCE") {
                    newCV['PERFORMANCE'].push(cv.cv_info_fields)
                }
                if (cv.cv_info_fields.section === "EDUCATION") {
                    newCV['EDUCATION'].push(cv.cv_info_fields)
                }
                if (cv.cv_info_fields.section === "PUBLICATIONS") {
                    newCV['PUBLICATIONS'].push(cv.cv_info_fields)
                }
                if (cv.cv_info_fields.section === "ORGANIZATIONS") {
                    newCV['ORGANIZATIONS'].push(cv.cv_info_fields)
                }
            })
            setArt(state => ({ ...state, cv: newCV }))
        }
    }, [art.sourceCV])

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