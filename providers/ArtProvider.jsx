import React, { useState, useEffect, createContext } from 'react'
import Image from 'next/image'

import { shuffle } from '../utils'

export const ArtContext = createContext()

const ArtProvider = ({ children }) => {
    const [art, setArt] = useState({
        viewArtworks : false,
        slideRight: false,
        sourceArtwork: {},
        originalArtwork: [],
        filteredArtwork: [],
        filterArray: [],
        sortValue: 'random',
        sourceCv: {},
        cv: {},
        sourceBio: {},
        bio: {},
        sourceStatement: {},
        statement: {}
    })

    //  shape Strapi artwork data into an array
    useEffect(() => {
        if (Object.keys(art.sourceArtwork).length !== 0) {
           var shapedArtwork = []
           art.sourceArtwork.data.map(art => {
               var shapedArt = art.attributes
               shapedArt["id"] = art.id
               shapedArtwork.push(shapedArt)
           })
           console.log(shapedArtwork)
           setArt(state => ({
               ...state,
               originalArtwork: shapedArtwork,
               filteredArtwork: shuffle(shapedArtwork)
           }))
        }
    }, [art.sourceArtwork])

    // shape Strapi cv data into an object
    useEffect(() => {
        if (Object.keys(art.sourceCv).length !== 0) {
            console.log(art.sourceCv)
            var shapedWorkCities = []
            art.sourceCv.data.attributes.work_cities.map(city => {
                shapedWorkCities.push(city.city)
            })
            var shapedExhibitions = []
            art.sourceCv.data.attributes.exhibitions.map(exhibition => {
                shapedExhibitions.push(exhibition.exhibition)
            })
            var shapedLinks = []
            art.sourceCv.data.attributes.links.map(link => {
                shapedLinks.push(link)
            })
            var shapedCv = {
                name: art.sourceCv.data.attributes.name,
                birthCity: art.sourceCv.data.attributes.birth_city,
                birthYear: art.sourceCv.data.attributes.birth_date,
                workCities: shapedWorkCities,
                exhibitions: shapedExhibitions,
                links: shapedLinks
            }
            setArt(state => ({ ...state, cv: shapedCv }))
        }
    }, [art.sourceCv])


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