import React, { useContext} from 'react'
import { ArtContext } from '../providers/ArtProvider'

import styles from '../styles/name.module.scss'

const Name = () => {
    const [art] = useContext(ArtContext)
    return (
        <div className={styles.container}>
            {Object.keys(art.cv).length !== 0 && (
                <>
                <h1>{art.cv.name}</h1>
                <h2>b. {art.cv.birthYear}, {art.cv.birthCity}</h2>
                <h3>lives and works in {art.cv.workCities[0]} and {art.cv.workCities[1]}</h3>
                </>
            )}
        </div>
    )
}

export default Name