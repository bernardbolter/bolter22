import React, { useEffect, useContext } from 'react'

import { getAllArtworks } from '../lib/api'

import Head from 'next/head'
import styles from '../styles/home.module.scss'

import Artworks from '../components/Artworks'
// import Exhibit from '../components/Exhibit'
import Info from '../components/Info'
import Name from '../components/Name'
import Nav from '../components/Nav'
import News from '../components/News'

import { ArtContext } from '../providers/ArtProvider'

////////////////////
// z-index legend
// index - 1
// artworks - 100
// exhibit - 200
// name - 300
// info - 400
// nav - 500
// news - 600

const Home = ({ allArtworks: { edges } }) => {
  console.log("edges:", edges)
  const [art, setArt] = useContext(ArtContext)
  
  useEffect(() => {
    setArt(state => ({
        ...state, 
        sourceArtwork: edges
    }))
  }, [edges])

  console.log(art)


  return (
    <div className={styles.container}>
      <Head>
        <title>Bernard Bolter Web Portal</title>
        <meta name="description" content="Bernard Bolter Web Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Name />
      <Nav />
      <Artworks />
      <Info />
      <News />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const allArtworks = await getAllArtworks()
  return {
    props: {
      allArtworks
    }
  }
}