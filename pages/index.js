import React, { useEffect, useContext } from 'react'

import Head from 'next/head'
import styles from '../styles/home.module.scss'

import Artworks from '../components/Artworks'
import Exhibit from '../components/Exhibit'
import Info from '../components/Info'
import Name from '../components/Name'
import Nav from '../components/Nav'

import { ArtContext } from '../providers/ArtProvider'

////////////////////
// z-index legend
// index - 1
// artworks - 100
// exhibit - 200
// name - 300
// info - 400
// nav - 500

const Home = ({ artworks, cv }) => {
  const [art, setArt] = useContext(ArtContext)
  console.log(art.filteredArtwork)

  useEffect(() => {
    if (artworks !== undefined) {
      setArt(state => ({...state, sourceArtwork: artworks}))
    }
  }, [artworks])

  useEffect(() => {
    if (cv !== undefined) {
      setArt(state => ({...state, sourceCv: cv}))
    }
  }, [cv])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Bernard Bolter Web Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Name />
      <Nav />
      <Exhibit />
      <Artworks />
      <Info />
    </div>
  )
}

export default Home

export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/artworks')
    const artworks = await res.json()
    const resTwo = await fetch('http://localhost:1337/api/cv?populate=*')
    const cv = await resTwo.json()
  return {
    props: {
      artworks,
      cv
    }
  }
}