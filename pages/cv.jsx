import React, { useEffect, useContext} from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { useRouter } from 'next/router'

import { getCVData } from '../lib/api'

import Info from '../components/Info'
import Name from '../components/Name'

import Arrow from '../svg/arrow'

import CVStyle from '../styles/cv.style'

const CV = ({ cvData }) => {
    const [art, setArt] = useContext(ArtContext)
    const router = useRouter()

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
                    className="cv-back"
                    onClick={() => router.push('/')}    
                >
                    <Arrow />
                </div>
                {Object.keys(art.cv).length !== 0 &&
                    <div
                        className="cv-content"
                    >
                        <h1>SOLO</h1>
                        {art.cv.SOLO.map((solo, i) => (
                            <div className="cv-entry" key={i}>
                                <h4>{solo.year}</h4>
                                <h3>{solo.gallery}</h3>
                                <h2>'{solo.title}'</h2>
                                <h5>- {solo.city}</h5>
                            </div>
                        ))}
                        <h1>GROUP</h1>
                        {art.cv.GROUP.map((group, i) => (
                            <div className="cv-entry" key={i}>
                                <h4>{group.year}</h4>
                                <h3>{group.gallery}</h3>
                                <h2>'{group.title}'</h2>
                                <h5>- {group.city}</h5>
                            </div>
                        ))}
                        <h1>PERFORMANCE</h1>
                        {art.cv.PERFORMANCE.map((performance, i) => (
                            <div className="cv-entry" key={i}>
                                <h4>{performance.year}</h4>
                                <h3>{performance.gallery}</h3>
                                <h2>'{performance.title}'</h2>
                                <h5>- {performance.city}</h5>
                            </div>
                        ))}
                        <h1>EDUCATION</h1>
                        {art.cv.EDUCATION.map((edu, i) => (
                            <div className="cv-entry" key={i}>
                                <h4>{edu.year}</h4>
                                <h2>{edu.school}</h2>
                                <h3>'{edu.title}'</h3>
                                <h5>- {edu.city}</h5>
                            </div>
                        ))}
                        <h1>PUBLICATIONS</h1>
                        {art.cv.PUBLICATIONS.map((pubs, i) => (
                            <div className="cv-entry" key={i}>
                                <h4>{pubs.year}</h4>
                                <h2>{pubs.title}</h2>
                                <h5>{pubs.role}</h5>
                            </div>
                        ))}
                        <h1>ORGANIZATIONS</h1>
                        {art.cv.ORGANIZATIONS.map((orgs, i) => (
                            <div className="cv-entry" key={i}>
                                <h4>{orgs.year}</h4>
                                <h2>{orgs.title}</h2>
                                <h5>{orgs.role}</h5>
                            </div>
                        ))}
                    </div>
                }           
            </div>
        </CVStyle>
    )
}

export default CV

export async function getStaticProps() {
    const cvData = await getCVData()
    console.log(cvData)

    return {
        props: {
            cvData
        },
        revalidate: 10
    }
}