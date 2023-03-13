import React, { useEffect, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { useRouter } from 'next/router'

import Info from '../components/Info'
import Name from '../components/Name'

import Arrow from '../svg/arrow'

import StatementStyle from '../styles/statement.style'
import { getStatementData } from '../lib/api'

const Statement = ({ statementData }) => {
    const [art, setArt] = useContext(ArtContext)
    const router = useRouter()

    useEffect(() => {
        if (Object.keys(statementData).length !== 0) {
            console.log(statementData)
            setArt(state => ({
                ...state,
                sourceInfo: statementData.artistInfo,
                statement: statementData.page.content
            }))
        }
    }, [statementData, setArt])
    
    return (
        <StatementStyle>
            <div className="statement-container">
                <Name />
                <Info />
                <div 
                    className="statement-back"
                    onClick={() => router.push('/')}    
                >
                    <Arrow />
                </div>
                <div className="statement-content"
                    dangerouslySetInnerHTML={{ __html:art.statement }}
                />
            </div>
        </StatementStyle>
    )
}

export default Statement

export async function getStaticProps() {
    const statementData = await getStatementData()

    return {
        props: {
            statementData
        },
        revalidate: 10
    }
}