import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
  logger,
)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined)
  return store
}