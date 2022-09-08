import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';

export default function Store() {
  const middleWareEnhancer = applyMiddleware(...[]);
  return createStore(reducers, middleWareEnhancer);
}

export type AppState = ReturnType<typeof reducers>;
