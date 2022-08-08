import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { createHttpLink, HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAccessToken } from '../customHooks/useAuthToken';

const httpLink = new HttpLink({
  uri: "https://tranquil-oasis-91821.herokuapp.com/graphql"
});


const authLink = setContext(async(_, { headers }) => {
  const token = await AsyncStorage.getItem('accessToken')
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: "" + JSON.parse(token)?.token
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, httpLink])
});
