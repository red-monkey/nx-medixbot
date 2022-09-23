import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { createHttpLink, HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URI } from '@env';

const httpLink = new HttpLink({
  uri: API_URI
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
