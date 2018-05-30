import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const debug = process.env.NODE_ENV !== 'production'

const middleware = [
  debug && logger,
].filter(Boolean)

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined)
  return store
}