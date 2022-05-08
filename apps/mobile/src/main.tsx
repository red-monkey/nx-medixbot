/**
 * @format
 */
import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/apollo/apollo';
import App from './app/App';
import { name as appName } from '../app.json';
import configureStore from './app/redux/store/ConfigureStore';
import { Provider } from 'react-redux';
const store = configureStore();

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);
AppRegistry.registerComponent(
  Platform.OS === 'ios' ? 'main' : appName,
  () => Root
);
