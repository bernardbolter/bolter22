import React, { useEffect, useContext} from 'react'
import { ArtContext } from '../providers/ArtProvider'

import { getCVData } from '../lib/api'

import Info from '../components/Info'
import Name from '../components/Name'

import CVStyle from '../styles/cv.style'

const CV = ({ cvData }) => {
    console.log(cvData)
    const [art, setArt] = useContext(ArtContext)

    useEffect(() => {
        if (Object.keys(cvData).length !== 0) {
            setArt(state => ({
                ...state,
                sourceInfo: cvData.artistInfo,
                sourceCV: cvData.cvinfos
            }))
        }
    }, [cvData])

    return (
        <CVStyle>
            <div className="cv-container">
                <Info />
                <Name />
                <div
                    className="cv-content"
                >
                    <h1>cv</h1>
                </div>
            </div>
        </CVStyle>
    )
}

export default CV

export async function getStaticProps() {
    const cvData = await getCVData()
    // console.log(cvData)

    return {
        props: {
            cvData
        },
        revalidate: 10
    }
}