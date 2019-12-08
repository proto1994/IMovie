/** @format */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import promiseMiddleware from './promiseMiddleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [promiseMiddleware, sagaMiddleware],
  });
  // @ts-ignore
  store.runSagaTask = () => {
    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  // @ts-ignore
  store.runSagaTask();
  return store;
}

export default configureAppStore();
