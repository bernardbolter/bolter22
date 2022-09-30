import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://bolter.madeinberlin.net/graphql',
    cache: new InMemoryCache
})

export default client