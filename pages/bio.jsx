import React, { useState, useEffect } from 'react'
// import axios from 'axios'

import { getBio } from '../lib/api'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from '@apollo/client'

import Info from '../components/Info'
import Name from '../components/Name'

import styles from '../styles/bio.module.scss'

const Bio = ({ bio }) => {
    // const [bio, setBio] = useState('')
    // const [data, setData] = useState({})
    console.log("bio works: ", bio)

    // useEffect(() => {
    //     axios.get(
    //         "https://bolter.madeinberlin.net/wp-json/wp/v2/pages/65"
    //     )
    //     .then((res) => {
    //         // setData(res.data)
    //         console.log(data)
    //         console.log('got data')
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <div className={styles.container}>
            <Info />
            <Name />
            <p>Bio</p>
        </div>
    )
}

// export async function getStaticProps() {
//     const bio = await getBio()

//     return {
//         props: { bio }
//     }
// }

// export async function getStaticProps() {
//     const client = new ApolloClient({
//       uri: 'https://bolter.madeinberlin.net/graphql',
//       cache: new InMemoryCache
//     })
  
//     const response = await client.query({
//       query: gql`
//         query BioQuery {
//             page(id: "cG9zdDo2NQ==", idType: DATABASE_ID) {
//                 slug
//                 content(format: RAW)
//             }
//         }
//       `
//     })
  
//     const bio = response.data
  
//     console.log("response: ", response)
//     // console.log(works)
  
//     return {
//       props: {
//         bio
//       }
//     }
//   }

export async function getStaticProps() {
    const bio = await getBio()
    return {
      props: {
        bio
      }
    }
  }

export default Bio