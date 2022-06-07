import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';
const httpLink = new HttpLink({
  uri: 'https://erxes.priuscenter.mn/mobile-app/graphql',
  // uri: 'http://192.168.55.229:4100/graphql',
  credentials: 'include',
});
const client = () =>
  new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
  });

export default client;
