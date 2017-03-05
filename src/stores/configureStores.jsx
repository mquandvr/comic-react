import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import fetchDataApi from '../sagas/index';
import rootReducer from '../reducers';

/**
 * Create a logger.
 */
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState = {}) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware(fetchDataApi);
  return createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger));
};

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
};
