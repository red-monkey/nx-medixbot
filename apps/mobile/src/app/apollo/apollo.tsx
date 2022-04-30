import {ApolloClient, InMemoryCache} from '@apollo/client';
import {createHttpLink} from '@apollo/client/link/http';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URI} from '../utils/constants';

const httpLink = createHttpLink({
  uri: API_URI,
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = AsyncStorage.getItem('accessToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
