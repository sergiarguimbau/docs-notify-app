// @see https://github.com/rt2zz/redux-persist (Persisted Store)
// @see https://github.com/zalmoxisus/redux-devtools-extension (RN Debugger)
// @see https://github.com/LogRocket/redux-logger (Redux Action Logger)

import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import rootReducer from './reducer';

const composeEnhancers = composeWithDevTools({});

const logger = createLogger({
  collapsed: true,
  predicate: () => __DEV__,
});

const enhancer = composeEnhancers(
  applyMiddleware(logger),
)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
