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

    return json.data
}

export async function getAllArtworks() {
    const data = await fetchAPI(
        `
            query AllArtworks {
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
    )

    return data?.artworks
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