import React, { useEffect, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import Info from '../components/Info'
import Name from '../components/Name'

import StatementStyle from '../styles/statement.style'
import { getStatementData } from '../lib/api'

const Statement = ({ statementData }) => {
    const [art, setArt] = useContext(ArtContext)

    useEffect(() => {
        if (Object.keys(statementData).length !== 0) {
            console.log(statementData)
            setArt(state => ({
                ...state,
                sourceInfo: statementData.artistInfo,
                statement: statementData.page.content
            }))
        }
    }, [statementData])
    return (
        <StatementStyle>
            <div className="statement-container">
                <Name />
                <Info />
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