import React, { useContext } from 'react'

import { ArtContext } from '../providers/ArtProvider'

import styles from '../styles/exhibit.module.scss'

const Exhibit = () => {
    const [art, setArt] = useContext(ArtContext)

    return (
        <div className={styles.container}>
            <p>Exhibit</p>
        </div>
    )
}

export default Exhibit