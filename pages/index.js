import React, { useEffect, useContext } from 'react'
import { client } from '../data/client'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'

import Head from 'next/head'
import styles from '../styles/home.module.scss'

import Artworks from '../components/Artworks'
import Exhibit from '../components/Exhibit'
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

const Home = ({ works }) => {
  console.log(works)
  const [art, setArt] = useContext(ArtContext)
  
  useEffect(() => {
    setArt(state => ({...state, originalArtwork: works, filteredArtwork: works}))
  }, [works])

  console.log(art)


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Bernard Bolter Web Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Name />
      <Nav />
      {art.viewArtworks ? <Artworks /> : <Exhibit />}
      <Info />
      <News />
    </div>
  )
}

export default Home

// export async function getStaticProps() {
//     const resArtworks = await fetch('http://localhost:1337/api/artworks')
//     const artworks = await resArtworks.json()
//     const resCV = await fetch('http://localhost:1337/api/cv?populate=*')
//     const cv = await resCV.json()
//   return {
//     props: {
//       artworks,
//       cv
//     }
//   }
// }

// export async function getStaticProps() {
//   try {
//     const { data, errors } = await client.query({
//       query: gql`
//         artworks {
//           edges {
//             node {
//               artwork {
//                 extraImages
//                 height
//                 series
//                 width
//               }
//               slug
//             }
//           }
//         }
//       `,
//     });
//     return {
//       props: {
//         page: data.page,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {},
//     };
//   }
// }

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://bolter.madeinberlin.net/graphql',
    cache: new InMemoryCache
  })

  const response = await client.query({
    query: gql`
      query MyQuery {
        artworks {
          edges {
            node {
              artwork {
                extraImages
                height
                series
                width
              }
              slug
            }
          }
        }
      }
    `
  })

  const works = response.data.artworks.edges.map(({node}) => node)

  console.log(works)

  return {
    props: {
      works
    }
  }
}