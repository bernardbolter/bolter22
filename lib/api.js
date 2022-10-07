const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type' : 'application/json' }

    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })  
    })

    const json = await res.json()

    if (json.errors) {
        console.log(json.errors)
        console.log('error details', query, variables)
        throw new Error('Failed to fetch API')
    }

    console.log('get data: ', json.data)

    return json.data
}

export async function getAllData() {
    console.log('getting data')
    const data = await fetchAPI(
        `
        query WPQuery {
            pages {
                edges {
                  node {
                    content(format: RENDERED)
                    slug
                  }
                }
              }
              cVEntries {
                nodes {
                  cv {
                    birthCity
                    birthYear
                    category
                    city
                    direction
                    gallery
                    link1 {
                      url
                      title
                    }
                    link2 {
                      title
                      url
                    }
                    link3 {
                      title
                      url
                    }
                    link4 {
                      title
                      url
                    }
                    year
                    workCity2
                    workCity1
                    title
                    school
                    notes
                    name
                  }
                  date
                }
              }
              artworks {
                nodes {
                  artwork {
                    coordinates
                    coordinatesDigits
                    density
                    elevation
                    extraImages
                    fieldGroupName
                    height
                    orientation
                    population
                    proportion
                    series
                    width
                  }
                  slug
                }
              }
          } 
        `
    )

    return data
}

export async function getIndexData() {
  const artData = await fetchAPI(
    `
      query ArtworkData {
        artworks {
          nodes {
            artwork {
              coordinates
              coordinatesDigits
              density
              elevation
              extraImages
              fieldGroupName
              height
              orientation
              population
              proportion
              series
              width
            }
            slug
          }
        }
        artistInfo(id: "cG9zdDoxMDU=") {
          slug
          id
          artistInfo {
            birthCity
            birthYear
            link1 {
              title
              url
            }
            link2 {
              title
              url
            }
            link3 {
              title
              url
            }
            link4 {
              title
              url
            }
            link5 {
              title
              url
            }
            name
            workCity1
            workCity2
            workCity3
          }
        }
      }
    `
  )

  return artData
}

export async function getCVdata() {
    const cvData = await fetchAPI(
        `
            query AllCvData {
                cVEntries {
                    nodes {
                      cv {
                        birthyear
                        category
                        city
                        direction
                        gallery
                        name
                        notes
                        school
                        title
                        year
                      }
                    }
                  }
            }
        `
    )

    return cvData?.cVEntries
}

export async function getBio() {
    const data = await fetchAPI(
        `
        query BioQuery {
            page(id: "65", idType: DATABASE_ID) {
              content
            }
          }
        `
    )

    return data?.page.content
}

export async function getPageById(id) {
    console.log(id)
    const data = await fetchAPI(
        `
        queryPageById($id: ID!, $idType: PostIdType!) {
                page(id: $id, idType: $idType) {
                    content
                    title
                 }
             }
        `,
        {variables: {
                id: id,
                idType: 'DATABASE_ID'
            }
        }
        // `
        //     queryPageBySlug($id: ID!, $idType: PageIdType!) {
        //         page(id: $id, idType: $idType) {
        //             content
        //             title
        //         }
        //     }
        // `,
        // {
        //     variables: {
        //         id: id,
        //         idType: 'DATABASE_ID'
        //     }
        // }
    )

    return data
}