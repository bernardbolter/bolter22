import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // My WordPress GraphQL endpoint.
  uri: "https://bolter.madeinberlin.net/graphql",
  // Apollo Cacheing
  cache: new InMemoryCache(),
});