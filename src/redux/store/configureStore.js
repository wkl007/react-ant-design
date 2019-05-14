import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const debug = process.env.NODE_ENV !== 'production'

const middleware = [
  debug && logger,
].filter(Boolean)

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined)
}
