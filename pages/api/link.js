import { gql } from '@apollo/client'

export const GET_LATEST_LINK = gql`
    query LinkQuery {
        page(id: "cG9zdDo1Nw==", idType: ID) {
            content(format: RAW)
        }
    }
`