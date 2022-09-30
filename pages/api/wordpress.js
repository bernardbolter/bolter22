import { gql } from '@apollo/client'

import client from '../../apollo-client'

export async function getBio() {
    const bioData = await client.query({
        query: gql`
            query BioQuery {
                page(id: "cG9zdDo2NQ==", idType: DATABASE_ID) {
                content(format: RAW)
                }
            }
        `
    })

    return bioData
}
