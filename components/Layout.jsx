import React, { useEffect, useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { getAllData } from '../lib/api'

const Layout = ({ allData, children }) => {
    console.log(allData)
    const [art, setArt] = useContext(ArtContext)
  
    useEffect(() => {
      if (Object.keys(allData).length !== 0) {
        setArt(state => ({
            ...state,
            sourceArtwork: allData.artworks,
            sourceCV: allData.cVEntries,
            sourcePages: allData.pages
        }))
      }
    }, [allData])

    return (
        <div>
            {children}
        </div>
    )
}

export default Layout

export async function getStaticProps() {
    const allData = await getAllData()
  
    return {
      props: {
        allData
      },
      revalidate: 10,
    }
  }