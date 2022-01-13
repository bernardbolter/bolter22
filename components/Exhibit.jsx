import React, { useContext } from 'react'

import { ArtContext } from '../providers/ArtProvider'

import '../styles/exhibit.module.scss'

const Exhibit = () => {
    const [art, setArt] = useContext(ArtContext)

    return (
        <div className="container">
            <p>Artworks</p>
        </div>
    )
}

export default Exhibit