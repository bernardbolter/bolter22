import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://digitalcityseries.com/bolter/graphql',
    cache: new InMemoryCache
})

export default client