/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/index';

export default function Store() {

    const middlewares = [createLogger({})];
    const middleWareEnhancer = applyMiddleware(...middlewares);
  return createStore(reducers, middleWareEnhancer);
}

export type AppState = ReturnType<typeof reducers>;