import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const debug = process.env.NODE_ENV !== 'production'

const middleware = [
  debug && logger,
  thunkMiddleware
].filter(Boolean)

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

export default function configureStore () {
  return createStore(rootReducer, enhancer)
}
